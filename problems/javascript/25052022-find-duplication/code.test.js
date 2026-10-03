import { describe, expect, it } from "vitest";
import findRepeat, { findRepeat2 } from "./code";

describe.each([findRepeat, findRepeat2])("duplicate finder %#", (implementation) => {
  it.each([[[1, 1], 1], [[1, 2, 3, 2], 2], [[1, 2, 5, 5, 5, 5], 5], [[10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10]])("finds %#", (values, expected) => {
    expect(implementation(values)).toBe(expected);
  });
});
