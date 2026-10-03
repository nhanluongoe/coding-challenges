import { describe, expect, it } from "vitest";
import dutchFlagSort from "./code";

describe("dutchFlagSort", () => {
  it.each([
    [
      [1, 0, 2, 1, 0],
      [0, 0, 1, 1, 2],
    ],
    [
      [2, 2, 0, 1, 2, 0],
      [0, 0, 1, 2, 2, 2],
    ],
    [[], []],
  ])("sorts in place %#", (values, expected) => {
    expect(dutchFlagSort(values)).toBeUndefined();
    expect(values).toEqual(expected);
  });
});
