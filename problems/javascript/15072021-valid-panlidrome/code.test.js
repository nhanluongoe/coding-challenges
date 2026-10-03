import { describe, expect, it } from "vitest";
import isPalindrome from "./code";

describe("isPalindrome", () => {
  it.each([
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    ["", true],
    ["0P", false],
  ])("checks %s", (input, expected) => expect(isPalindrome(input)).toBe(expected));
});
