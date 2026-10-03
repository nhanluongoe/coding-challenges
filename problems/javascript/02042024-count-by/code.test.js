import { describe, expect, it } from "vitest";
import countBy from "./code";

describe("countBy", () => {
  it("groups values by an iteratee result", () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 1, 6: 2 });
    expect(countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (item) => item.n)).toEqual({
      3: 2,
      5: 1,
    });
  });

  it("handles empty input", () => {
    expect(countBy([], String)).toEqual({});
  });
});
