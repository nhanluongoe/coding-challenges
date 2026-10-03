import { describe, expect, it } from "vitest";
import highestProductOf3 from "./code";

describe("highestProductOf3", () => {
  it.each([
    [[1, 2, 3, 4], 24],
    [[-10, 1, 3, 2, -10], 300],
    [[-5, -1, -3, -2], -6],
  ])("calculates %#", (values, expected) =>
    expect(highestProductOf3(values)).toBe(expected));

  it("requires three values", () =>
    expect(() => highestProductOf3([1, 2])).toThrow());
});
