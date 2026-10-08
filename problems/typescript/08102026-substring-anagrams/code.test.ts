import { describe, expect, it } from "vitest";

import countSubstringAnagrams from "./code";

describe("countSubstringAnagrams", () => {
  it("counts the anagrams in the example", () => {
    expect(countSubstringAnagrams("caabab", "aba")).toBe(2);
  });

  it("counts overlapping anagrams", () => {
    expect(countSubstringAnagrams("abab", "ab")).toBe(3);
  });

  it("counts matches containing repeated letters", () => {
    expect(countSubstringAnagrams("baaabaa", "aab")).toBe(4);
  });

  it("counts every occurrence for a one-character target", () => {
    expect(countSubstringAnagrams("abacada", "a")).toBe(4);
  });

  it("returns one when the entire source is an anagram", () => {
    expect(countSubstringAnagrams("listen", "silent")).toBe(1);
  });

  it("returns zero when the target is longer than the source", () => {
    expect(countSubstringAnagrams("ab", "abc")).toBe(0);
  });

  it("returns zero when there are no matching substrings", () => {
    expect(countSubstringAnagrams("abcdef", "xyz")).toBe(0);
  });

  it("handles a source and target of one identical character", () => {
    expect(countSubstringAnagrams("a", "a")).toBe(1);
  });
});
