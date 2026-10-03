import { describe, expect, it } from "vitest";
import isBalanced, { BinaryTreeNode } from "./code";

describe("isBalanced", () => {
  it("accepts leaf depths differing by at most one", () => {
    const root = new BinaryTreeNode(1);
    root.insertLeft(2);
    root.insertRight(3).insertRight(4);
    expect(isBalanced(root)).toBe(true);
  });

  it("rejects leaf depths differing by two", () => {
    const root = new BinaryTreeNode(1);
    root.insertLeft(2);
    root.insertRight(3).insertRight(4).insertRight(5);
    expect(isBalanced(root)).toBe(false);
  });

  it("accepts empty and single-leaf trees", () => {
    expect(isBalanced(null)).toBe(true);
    expect(isBalanced(new BinaryTreeNode(1))).toBe(true);
  });
});
