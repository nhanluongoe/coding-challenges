import { describe, expect, it } from "vitest";
import heapSort from "./code";

describe("heapSort", () => {
  it.each([
    [[], []],
    [
      [7, 2, 4, 3, 1, 2],
      [1, 2, 2, 3, 4, 7],
    ],
    [
      [-1, 3, 0],
      [-1, 0, 3],
    ],
  ])("sorts in place %#", (values, expected) => {
    expect(heapSort(values)).toBe(values);
    expect(values).toEqual(expected);
  });
});
