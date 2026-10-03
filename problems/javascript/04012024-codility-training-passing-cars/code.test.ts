import { describe, expect, it } from "vitest";
import solution from "./code";

describe("passing cars", () => {
  it.each([
    [[0, 1, 0, 1, 1], 5],
    [[1, 1, 1], 0],
    [[0, 0, 0], 0],
    [[], 0],
  ])("counts passing pairs %#", (cars, expected) => {
    expect(solution(cars)).toBe(expected);
  });

  it("returns -1 above one billion pairs", () => {
    expect(solution([...Array(50_000).fill(0), ...Array(50_000).fill(1)])).toBe(-1);
  });
});
