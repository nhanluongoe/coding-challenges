export class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}

export default function isBinarySearchTree(treeRoot) {
  if (!treeRoot) return true

  const nodes = [{ node: treeRoot, lowerBound: -Infinity, upperBound: Infinity }]
  while (nodes.length) {
    const { node, lowerBound, upperBound } = nodes.pop()
    if (node.value <= lowerBound || node.value >= upperBound) return false
    if (node.left) {
      nodes.push({ node: node.left, lowerBound, upperBound: node.value })
    }
    if (node.right) {
      nodes.push({ node: node.right, lowerBound: node.value, upperBound })
    }
  }
  return true
}
