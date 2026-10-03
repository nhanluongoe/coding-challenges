import { describe, expect, it } from "vitest";

import pairSum from "./code";

describe("pairSum", () => {
  it.each([
    { description: "sample input", nums: [-1, 3, 4, 2], target: 3, expected: [0, 2] },
    { description: "pair at the start", nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { description: "duplicate values", nums: [3, 3], target: 6, expected: [0, 1] },
    { description: "negative numbers", nums: [-5, -2, 4, 8], target: 2, expected: [1, 2] },
    { description: "zero values", nums: [0, 4, 3, 0], target: 0, expected: [0, 3] },
  ])("finds a pair: $description", ({ nums, target, expected }) => {
    expect(pairSum(nums, target)).toEqual(expected);
  });

  it("returns an empty array when no pair exists", () => {
    expect(pairSum([1, 2, 3], 7)).toEqual([]);
  });
});
