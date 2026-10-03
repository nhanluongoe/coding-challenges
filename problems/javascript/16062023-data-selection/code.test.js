import { describe, expect, it } from "vitest";
import selectData from "./code";

const sessions = [
  { user: 0, duration: 50, equipment: ["bench"] },
  { user: 7, duration: 150, equipment: ["dumbbell"] },
  { user: 7, duration: 100, equipment: ["bike"] },
  { user: 2, duration: 200, equipment: ["bike"] },
];

describe("selectData", () => {
  it("filters by zero-valued user, duration, and equipment", () => {
    expect(selectData(sessions, { user: 0 })).toEqual([sessions[0]]);
    expect(selectData(sessions, { minDuration: 150, equipment: ["bike"] })).toEqual([sessions[3]]);
  });

  it("merges sessions before filtering", () => {
    expect(selectData(sessions, { merge: true, minDuration: 250 })).toEqual([
      { user: 7, duration: 250, equipment: ["bike", "dumbbell"] },
    ]);
  });
});
