import { describe, expect, it } from "vitest";
import maxDepth from "./code";

describe("maxDepth", () => {
  it("finds the longest root-to-leaf path", () => {
    const tree = { left: { left: null, right: null }, right: { left: { left: null, right: null }, right: null } };
    expect(maxDepth(tree)).toBe(3);
  });

  it("handles empty and single-node trees", () => {
    expect(maxDepth(null)).toBe(0);
    expect(maxDepth({ left: null, right: null })).toBe(1);
  });
});
