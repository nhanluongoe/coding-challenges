import { describe, expect, it } from "vitest";
import isBinarySearchTree, { BinaryTreeNode } from "./code";

describe("isBinarySearchTree", () => {
  it("accepts a valid tree", () => {
    const root = new BinaryTreeNode(50);
    root.insertLeft(30).insertRight(40);
    root.insertRight(70).insertLeft(60);
    expect(isBinarySearchTree(root)).toBe(true);
  });

  it("rejects deep and duplicate bound violations", () => {
    const invalid = new BinaryTreeNode(50);
    invalid.insertLeft(30).insertRight(60);
    expect(isBinarySearchTree(invalid)).toBe(false);
    const duplicate = new BinaryTreeNode(1);
    duplicate.insertRight(1);
    expect(isBinarySearchTree(duplicate)).toBe(false);
  });

  it("accepts an empty tree", () =>
    expect(isBinarySearchTree(null)).toBe(true));
});
