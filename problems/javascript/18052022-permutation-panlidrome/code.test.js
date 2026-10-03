import { describe, expect, it } from "vitest";
import hasPermutation, { hasPalindromePermutation2 } from "./code";

describe.each([
  hasPermutation,
  hasPalindromePermutation2,
])("palindrome permutation %#", (implementation) => {
  it.each([
    ["aabcbcd", true],
    ["aabccbdd", true],
    ["aabcd", false],
    ["", true],
    ["a", true],
  ])("checks %s", (input, expected) => {
    expect(implementation(input)).toBe(expected);
  });
});
