import { describe, expect, it } from "vitest";
import binarySearch from "./code";

describe("binarySearch", () => {
  it.each([
    [[1, 2, 3, 6, 9, 11], 6, 3],
    [[1, 2, 3, 10, 11, 20], 20, 5],
    [[1], 1, 0],
    [[], 1, -1],
    [[1, 3, 5], 2, -1],
  ])("searches %#", (values, target, expected) => {
    expect(binarySearch(values, target)).toBe(expected);
  });
});
