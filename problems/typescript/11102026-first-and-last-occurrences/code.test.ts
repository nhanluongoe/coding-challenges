import { describe, expect, it } from "vitest";

import findFirstAndLastOccurrences from "./code";

describe("findFirstAndLastOccurrences", () => {
  it("returns the first and last indices from the example", () => {
    const nums = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11];

    expect(findFirstAndLastOccurrences(nums, 4)).toEqual([3, 5]);
  });

  it("returns negative indices when the target is absent", () => {
    expect(findFirstAndLastOccurrences([1, 2, 4, 5], 3)).toEqual([-1, -1]);
  });

  it("returns negative indices for an empty array", () => {
    expect(findFirstAndLastOccurrences([], 1)).toEqual([-1, -1]);
  });

  it("returns the same index when the target occurs once", () => {
    expect(findFirstAndLastOccurrences([1, 3, 5], 3)).toEqual([1, 1]);
  });

  it("finds occurrences beginning at the first index", () => {
    expect(findFirstAndLastOccurrences([2, 2, 2, 3, 4], 2)).toEqual([0, 2]);
  });

  it("finds occurrences ending at the last index", () => {
    expect(findFirstAndLastOccurrences([1, 2, 3, 5, 5, 5], 5)).toEqual([
      3, 5,
    ]);
  });

  it("handles an array containing only the target", () => {
    expect(findFirstAndLastOccurrences([7, 7, 7, 7], 7)).toEqual([0, 3]);
  });

  it("handles repeated negative values", () => {
    expect(findFirstAndLastOccurrences([-5, -3, -3, -3, 0], -3)).toEqual([
      1, 3,
    ]);
  });
});
