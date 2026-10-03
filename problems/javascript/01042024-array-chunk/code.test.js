import { describe, expect, it } from "vitest";
import chunkArray from "./code";

describe("chunkArray", () => {
  it.each([
    [[1, 2, 3, 4, 5], 2, [[1, 2], [3, 4], [5]]],
    [[1], 3, [[1]]],
    [[], 3, []],
  ])("chunks %#", (input, size, expected) => {
    expect(chunkArray(input, size)).toEqual(expected);
  });

  it("rejects invalid sizes", () => {
    expect(() => chunkArray([1], 0)).toThrow(RangeError);
  });
});
