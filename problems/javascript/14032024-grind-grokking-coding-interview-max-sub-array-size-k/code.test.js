import { describe, expect, it } from "vitest";
import maxSumSubArrayOfSizeK from "./code";

describe("maxSumSubArrayOfSizeK", () => {
  it.each([
    [[2, 1, 5, 1, 3, 2], 3, 9],
    [[2, 3, 4, 1, 5], 2, 7],
    [[-5, -2, -3], 2, -5],
    [[], 1, 0],
    [[1, 2], 3, 0],
  ])("finds the maximum fixed window %#", (values, size, expected) => {
    expect(maxSumSubArrayOfSizeK(values, size)).toBe(expected);
  });
});
