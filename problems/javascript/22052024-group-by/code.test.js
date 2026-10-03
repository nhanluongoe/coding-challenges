import { describe, expect, it } from "vitest";
import groupBy from "./code";

describe("groupBy", () => {
  it("groups primitives and objects", () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      4: [4.2],
      6: [6.1, 6.3],
    });
    expect(groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (item) => item.n)).toEqual({
      3: [{ n: 3 }, { n: 3 }],
      5: [{ n: 5 }],
    });
  });

  it("handles empty input", () => expect(groupBy([], String)).toEqual({}));
});
