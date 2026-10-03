import { describe, expect, it } from "vitest";
import isBalanced, { TreeNode } from "./code";

describe("isBalanced", () => {
  it("recognizes balanced and unbalanced trees", () => {
    const balanced = new TreeNode(1, new TreeNode(2), new TreeNode(3));
    const unbalanced = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
    expect(isBalanced(balanced)).toBe(true);
    expect(isBalanced(unbalanced)).toBe(false);
  });

  it("handles an empty tree", () => expect(isBalanced(null)).toBe(true));
});
