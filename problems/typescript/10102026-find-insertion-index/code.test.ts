import { describe, expect, it } from "vitest";

import findInsertionIndex from "./code";

describe("findInsertionIndex", () => {
  const nums = [1, 2, 4, 5, 7, 8, 9];

  it("returns the target index when the target exists", () => {
    expect(findInsertionIndex(nums, 4)).toBe(2);
  });

  it("returns the insertion index between two values", () => {
    expect(findInsertionIndex(nums, 6)).toBe(4);
  });

  it("returns zero when the target belongs before every value", () => {
    expect(findInsertionIndex(nums, 0)).toBe(0);
  });

  it("returns the array length when the target belongs after every value", () => {
    expect(findInsertionIndex(nums, 10)).toBe(nums.length);
  });

  it("returns zero for an empty array", () => {
    expect(findInsertionIndex([], 5)).toBe(0);
  });

  it("finds the first element", () => {
    expect(findInsertionIndex(nums, 1)).toBe(0);
  });

  it("finds the last element", () => {
    expect(findInsertionIndex(nums, 9)).toBe(6);
  });

  it("handles negative values", () => {
    expect(findInsertionIndex([-10, -3, 2, 8], -5)).toBe(1);
  });
});
