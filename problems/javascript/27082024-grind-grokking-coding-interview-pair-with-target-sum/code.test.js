import { describe, expect, it } from "vitest";
import pairWithTargetSum from "./code";

describe("pairWithTargetSum", () => {
  it.each([
    [[2, 5, 9, 11], 11, [0, 2]], [[1, 2, 3, 4, 6], 6, [1, 3]],
    [[-3, -1, 2, 4], 1, [0, 3]], [[3], 6, [-1, -1]], [[], 1, [-1, -1]],
  ])("finds %#", (values, target, expected) => expect(pairWithTargetSum(values, target)).toEqual(expected));
});
