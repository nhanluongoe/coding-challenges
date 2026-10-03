import { describe, expect, it } from "vitest";
import merge from "./code";

describe("merge", () => {
  it.each([
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
    [[1], 1, [], 0, [1]],
    [[0], 0, [1], 1, [1]],
  ])("merges in place %#", (left, m, right, n, expected) => {
    expect(merge(left, m, right, n)).toBeUndefined();
    expect(left).toEqual(expected);
  });
});
