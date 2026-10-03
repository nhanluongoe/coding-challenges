import { describe, expect, it } from "vitest";

import twoSum from "./code";

describe("twoSum", () => {
  it.each([
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
  ])("returns the matching indices for $nums", ({ nums, target, expected }) => {
    expect(twoSum(nums, target)).toEqual(expected);
  });

  it("returns an empty array when no pair exists", () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([]);
  });
});
