import { describe, expect, it } from "vitest";
import inorderTraversal, { TreeNode } from "./code";

describe("inorderTraversal", () => {
  it("traverses left, root, right and retains zero values", () => {
    const root = new TreeNode(1, new TreeNode(0), new TreeNode(2));
    expect(inorderTraversal(root)).toEqual([0, 1, 2]);
  });

  it("handles an empty tree", () => {
    expect(inorderTraversal(null)).toEqual([]);
  });
});
