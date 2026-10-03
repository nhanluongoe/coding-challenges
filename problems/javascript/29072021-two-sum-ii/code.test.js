import { describe, expect, it } from "vitest";
import twoSum from "./code";

describe("twoSum", () => {
  it.each([
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
    [[1, 2, 3], 10, []],
  ])("returns one-based indices %#", (values, target, expected) =>
    expect(twoSum(values, target)).toEqual(expected));
});
