import { describe, expect, it } from "vitest";

import findLongestUniqueSubstringLength from "./code";

describe("findLongestUniqueSubstringLength", () => {
  it("returns the longest length from the example", () => {
    expect(findLongestUniqueSubstringLength("abcba")).toBe(3);
  });

  it("returns zero for an empty string", () => {
    expect(findLongestUniqueSubstringLength("")).toBe(0);
  });

  it("returns one for a single character", () => {
    expect(findLongestUniqueSubstringLength("a")).toBe(1);
  });

  it("returns the full length when every character is unique", () => {
    expect(findLongestUniqueSubstringLength("abcdef")).toBe(6);
  });

  it("returns one when every character is the same", () => {
    expect(findLongestUniqueSubstringLength("aaaaa")).toBe(1);
  });

  it("handles an adjacent repeated character", () => {
    expect(findLongestUniqueSubstringLength("aab")).toBe(2);
  });

  it("does not move the window start backward", () => {
    expect(findLongestUniqueSubstringLength("abba")).toBe(2);
  });

  it("finds the longest substring after multiple repetitions", () => {
    expect(findLongestUniqueSubstringLength("pwwkew")).toBe(3);
  });
});
