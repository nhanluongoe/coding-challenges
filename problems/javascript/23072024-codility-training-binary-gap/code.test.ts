import { describe, expect, it } from "vitest";
import solution from "./code";

describe("binary gap", () => {
  it.each([
    [9, 2],
    [529, 4],
    [20, 1],
    [15, 0],
    [32, 0],
    [1041, 5],
  ])("finds the gap in %i", (value, expected) => {
    expect(solution(value)).toBe(expected);
  });
});
