import { describe, expect, it } from "vitest";
import reverse from "./code";

describe("reverse", () => {
  it.each([
    ["", ""],
    ["A", "A"],
    ["ABCDE", "EDCBA"],
    ["ABCD", "DCBA"],
  ])("reverses %s in place", (input, expected) => {
    const characters = input.split("");
    expect(reverse(characters)).toBeUndefined();
    expect(characters.join("")).toBe(expected);
  });
});
