import { describe, expect, it } from "vitest";
import findRotationPoint from "./code";

describe("findRotationPoint", () => {
  it.each([
    [["cape", "cake"], 1],
    [["grape", "orange", "plum", "radish", "apple"], 4],
    [["apple", "banana", "carrot"], 0],
    [["only"], 0],
    [[], 0],
  ])("finds %#", (words, expected) => expect(findRotationPoint(words)).toBe(expected));
});
