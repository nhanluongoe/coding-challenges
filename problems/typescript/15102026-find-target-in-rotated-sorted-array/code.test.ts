import { describe, expect, it } from "vitest";

import findTargetInRotatedSortedArray from "./code";

describe("findTargetInRotatedSortedArray", () => {
  it("returns the target index from the example", () => {
    expect(findTargetInRotatedSortedArray([8, 9, 1, 2, 3, 4, 5, 6, 7], 1)).toBe(
      2,
    );
  });

  it("finds a target in the left sorted portion", () => {
    expect(findTargetInRotatedSortedArray([6, 7, 8, 1, 2, 3, 4, 5], 7)).toBe(
      1,
    );
  });

  it("finds a target in the right sorted portion", () => {
    expect(findTargetInRotatedSortedArray([6, 7, 8, 1, 2, 3, 4, 5], 4)).toBe(
      6,
    );
  });

  it("handles an array that has not been rotated", () => {
    expect(findTargetInRotatedSortedArray([1, 2, 3, 4, 5], 4)).toBe(3);
  });

  it("finds targets at the first and last indices", () => {
    expect(findTargetInRotatedSortedArray([4, 5, 1, 2, 3], 4)).toBe(0);
    expect(findTargetInRotatedSortedArray([4, 5, 1, 2, 3], 3)).toBe(4);
  });

  it("handles a single-element array", () => {
    expect(findTargetInRotatedSortedArray([5], 5)).toBe(0);
  });

  it("returns negative one when the target is absent", () => {
    expect(findTargetInRotatedSortedArray([4, 5, 6, 1, 2, 3], 7)).toBe(-1);
  });

  it("returns negative one for an empty array", () => {
    expect(findTargetInRotatedSortedArray([], 1)).toBe(-1);
  });
});

