import { describe, expect, it } from "vitest";
import addBinary from "./code";

describe("addBinary", () => {
  it.each([
    ["11", "1", "100"],
    ["1010", "1011", "10101"],
    ["0", "0", "0"],
    ["1111", "1", "10000"],
  ])("adds %s and %s", (left, right, expected) => {
    expect(addBinary(left, right)).toBe(expected);
  });
});
