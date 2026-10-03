import { describe, expect, it } from "vitest";
import findSecondLargest, { BinaryTreeNode } from "./code";

describe("findSecondLargest", () => {
  it("finds the second-largest value in a full tree", () => {
    const root = new BinaryTreeNode(50);
    root.insertLeft(30).insertRight(40);
    const right = root.insertRight(70);
    right.insertLeft(60);
    right.insertRight(80);
    expect(findSecondLargest(root)).toBe(70);
  });

  it("handles a largest node with a left subtree", () => {
    const root = new BinaryTreeNode(50);
    const right = root.insertRight(70);
    right.insertLeft(60).insertRight(65);
    expect(findSecondLargest(root)).toBe(65);
  });

  it("rejects trees with fewer than two nodes", () => {
    expect(() => findSecondLargest(null)).toThrow();
    expect(() => findSecondLargest(new BinaryTreeNode(1))).toThrow();
  });
});
