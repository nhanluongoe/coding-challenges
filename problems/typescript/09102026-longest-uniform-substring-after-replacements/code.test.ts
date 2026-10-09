import { describe, expect, it } from "vitest";

import findLongestUniformSubstringLength from "./code";

describe("findLongestUniformSubstringLength", () => {
  it("returns the longest length from the example", () => {
    expect(findLongestUniformSubstringLength("aabcdcca", 2)).toBe(5);
  });

  it("returns zero for an empty string", () => {
    expect(findLongestUniformSubstringLength("", 2)).toBe(0);
  });

  it("returns one for a single character", () => {
    expect(findLongestUniformSubstringLength("a", 0)).toBe(1);
  });

  it("returns the full length when the string is already uniform", () => {
    expect(findLongestUniformSubstringLength("aaaaa", 0)).toBe(5);
  });

  it("finds the longest existing run when no replacements are allowed", () => {
    expect(findLongestUniformSubstringLength("aaabcc", 0)).toBe(3);
  });

  it("returns the full length when enough replacements are allowed", () => {
    expect(findLongestUniformSubstringLength("abcde", 4)).toBe(5);
  });

  it("handles competing character frequencies within the window", () => {
    expect(findLongestUniformSubstringLength("aababba", 1)).toBe(4);
  });

  it("includes a different character at the edge when it can be replaced", () => {
    expect(findLongestUniformSubstringLength("abbb", 1)).toBe(4);
  });
});
