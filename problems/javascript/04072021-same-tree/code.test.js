import { describe, expect, it } from "vitest";
import isSameTree, { TreeNode } from "./code";

describe("isSameTree", () => {
  it("compares values and structure", () => {
    expect(
      isSameTree(
        new TreeNode(1, new TreeNode(2)),
        new TreeNode(1, new TreeNode(2)),
      ),
    ).toBe(true);
    expect(
      isSameTree(
        new TreeNode(1, new TreeNode(2)),
        new TreeNode(1, null, new TreeNode(2)),
      ),
    ).toBe(false);
    expect(isSameTree(new TreeNode(1), new TreeNode(2))).toBe(false);
  });

  it("considers two empty trees equal", () => {
    expect(isSameTree(null, null)).toBe(true);
  });
});
