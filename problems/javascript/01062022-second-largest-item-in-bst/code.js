export class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
export default function findSecondLargest(treeRoot) {
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error("Invalid input!");
  }

  const nodes = [];
  nodes.push(treeRoot);
  let max = -Infinity;
  let secondMax = -Infinity;

  while (nodes.length) {
    const node = nodes.pop();
    const { value, left, right } = node;

    if (value >= max) {
      secondMax = max;
      max = value;
    }

    if (value >= secondMax && value < max) {
      secondMax = value;
    }

    if (left) {
      nodes.push(left);
    }
    if (right) {
      nodes.push(right);
    }
  }

  // Find the second largest item in the binary search tree

  return secondMax;
}
