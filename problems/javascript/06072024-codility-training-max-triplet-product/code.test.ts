import { describe, expect, it } from "vitest";
import solution from "./code";

describe("maximum triplet product", () => {
  it.each([
    [[-3, 1, 2, -2, 5, 6], 60],
    [[-10, -10, 1, 3, 2], 300],
    [[-5, -4, -3], -60],
    [[1, 2, 3], 6],
  ])("finds the maximum for %#", (values, expected) => {
    expect(solution(values)).toBe(expected);
  });
});
