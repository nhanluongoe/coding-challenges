import { describe, expect, it } from "vitest";
import lengthOfLastWord from "./code";

describe("lengthOfLastWord", () => {
  it.each([[" ", 0], ["hello world  ", 5], ["fly me to the moon", 4], ["single", 6]])("checks %s", (text, expected) => {
    expect(lengthOfLastWord(text)).toBe(expected);
  });
});
