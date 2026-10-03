import { describe, expect, it } from "vitest";
import firstComeFirstServed, { isFirstComeFirstServed2 } from "./code";

describe.each([
  firstComeFirstServed,
  isFirstComeFirstServed2,
])("FCFS implementation %#", (implementation) => {
  it.each([
    [[1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6], true],
    [[], [2, 3, 6], [2, 3, 6], true],
    [[1, 5], [2, 3, 6], [1, 2, 6, 3, 5], false],
    [[1, 5], [2, 3], [1, 2, 3, 5, 8], false],
  ])("validates %#", (takeout, dineIn, served, expected) => {
    expect(implementation(takeout, dineIn, served)).toBe(expected);
  });
});
