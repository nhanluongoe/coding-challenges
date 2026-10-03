import { describe, expect, it } from "vitest";
import reverseWords from "./code";

describe("reverseWords", () => {
  it.each([
    ["vault", "vault"],
    ["thief cake", "cake thief"],
    ["one another get", "get another one"],
    ["", ""],
  ])("reverses words in %s", (input, expected) => {
    const message = input.split("");
    reverseWords(message);
    expect(message.join("")).toBe(expected);
  });
});
