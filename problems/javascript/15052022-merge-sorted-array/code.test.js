import { describe, expect, it } from "vitest";
import mergeArrays, { mergeArrays2 } from "./code";

describe.each([
  mergeArrays,
  mergeArrays2,
])("merge sorted implementation %#", (implementation) => {
  it.each([
    [[], [], []],
    [[], [1, 2], [1, 2]],
    [
      [0, 2, 4],
      [-1, 0, 3],
      [-1, 0, 0, 2, 3, 4],
    ],
    [
      [2, 4, 6, 8],
      [1, 7],
      [1, 2, 4, 6, 7, 8],
    ],
  ])("merges %#", (left, right, expected) => {
    expect(implementation(left, right)).toEqual(expected);
  });
});
