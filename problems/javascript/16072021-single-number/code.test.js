import { describe, expect, it } from "vitest";
import singleNumber, { singleNumberBetter } from "./code";

describe.each([
  singleNumber,
  singleNumberBetter,
])("single number implementation %#", (implementation) => {
  it.each([
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[-1, 2, 2], -1],
  ])("finds %#", (values, expected) => {
    expect(implementation(values)).toBe(expected);
  });
});
