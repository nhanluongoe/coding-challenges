import { describe, expect, it } from "vitest";
import findWordConcatenation from "./code";

describe("findWordConcatenation", () => {
  it.each([
    ["catfoxcat", ["cat", "fox"], [0, 3]],
    ["catcatfoxfox", ["cat", "fox"], [3]],
    ["wordgoodgoodgoodbestword", ["word", "good", "best", "good"], [8]],
    ["anything", [], []],
  ])("finds concatenations %#", (text, words, expected) => {
    expect(findWordConcatenation(text, words)).toEqual(expected);
  });
});
