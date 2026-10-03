import { describe, expect, it } from "vitest";
import climbStairs, { climbStairsTwo } from "./code";

describe.each([
  climbStairs,
  climbStairsTwo,
])("climb stairs implementation %#", (implementation) => {
  it.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 5],
    [25, 121393],
  ])("counts %i", (steps, expected) => {
    expect(implementation(steps)).toBe(expected);
  });
});
