import { describe, expect, it } from "vitest";
import maxSubArray from "./code";

describe("maxSubArray", () => {
  it.each([
    [[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
    [[1], 1],
    [[5, 4, -1, 7, 8], 23],
    [[-3, -2, -5], -2],
    [[], 0],
  ])("finds %#", (values, expected) =>
    expect(maxSubArray(values)).toBe(expected));
});
