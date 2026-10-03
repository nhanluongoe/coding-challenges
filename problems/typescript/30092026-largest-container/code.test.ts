import { describe, expect, it } from "vitest";

import largestContainer from "./code";

describe("largestContainer", () => {
  it.each([
    { description: "sample input", heights: [2, 7, 8, 3, 7, 6], expected: 24 },
    {
      description: "classic example",
      heights: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      expected: 49,
    },
    { description: "two lines", heights: [1, 1], expected: 1 },
    { description: "increasing heights", heights: [1, 2, 3, 4, 5], expected: 6 },
    { description: "zero-height lines", heights: [0, 0], expected: 0 },
    { description: "no lines", heights: [], expected: 0 },
  ])("finds the largest area for $description", ({ heights, expected }) => {
    expect(largestContainer(heights)).toBe(expected);
  });
});
