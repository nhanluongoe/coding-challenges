import { describe, expect, it } from "vitest";
import findSubString from "./code";

describe("findSubString", () => {
  it.each([
    ["aabdec", "abc", "abdec"], ["aabdec", "abac", "aabdec"],
    ["abdbca", "abc", "bca"], ["adcad", "abc", "no result"], ["anything", "", ""],
  ])("finds the window in %s", (text, pattern, expected) => {
    expect(findSubString(text, pattern)).toBe(expected);
  });
});
