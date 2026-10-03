import { describe, expect, it } from "vitest";
import smallestSubArrayGivenSum from "./code";

describe("smallestSubArrayGivenSum", () => {
  it.each([
    [[3, 4, 1, 1, 6], 8, 3],
    [[2, 1, 5, 2, 8], 7, 1],
    [[2, 1, 5, 2, 3, 2], 7, 2],
    [[1, 1], 5, 0],
  ])("finds the minimum window %#", (values, target, expected) => {
    expect(smallestSubArrayGivenSum(values, target)).toBe(expected);
  });
});
