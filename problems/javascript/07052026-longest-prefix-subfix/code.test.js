import { describe, expect, it } from "vitest";
import longestPrefixSuffix from "./code";

describe("longestPrefixSuffix", () => {
  it.each([
    ["ababab", "abab"], ["level", "l"], ["abcd", ""], ["aaaa", "aaa"], ["", ""],
  ])("finds the border of %s", (input, expected) => {
    expect(longestPrefixSuffix(input)).toBe(expected);
  });
});
