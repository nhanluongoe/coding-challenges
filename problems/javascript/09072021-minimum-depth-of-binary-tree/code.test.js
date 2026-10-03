import { describe, expect, it } from "vitest";
import minDepth, { betterMinDepth } from "./code";

describe.each([minDepth, betterMinDepth])("minimum depth implementation %#", (implementation) => {
  it("finds the shortest leaf path", () => {
    const tree = { left: { left: { left: null, right: null }, right: null }, right: { left: null, right: null } };
    expect(implementation(tree)).toBe(2);
  });

  it("handles empty and one-sided trees", () => {
    expect(implementation(null)).toBe(0);
    expect(implementation({ left: { left: null, right: null }, right: null })).toBe(2);
  });
});
