import { describe, expect, it } from "vitest";
import climbStairs from "./code";

describe("climbStairs", () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [5, 8],
    [10, 89],
  ])("counts paths for %i steps", (steps, expected) => {
    expect(climbStairs(steps)).toBe(expected);
  });
});
