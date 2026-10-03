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

/** Returns whether any two leaf depths differ by at most one. */
export default function isBalanced(treeRoot) {
  if (!treeRoot) return true

  const depths = []
  const nodes = [[treeRoot, 0]]
  while (nodes.length) {
    const [node, depth] = nodes.pop()
    if (!node.left && !node.right) {
      if (!depths.includes(depth)) depths.push(depth)
      if (depths.length > 2 || Math.abs(depths[0] - depths[1]) > 1) {
        return false
      }
    } else {
      if (node.left) nodes.push([node.left, depth + 1])
      if (node.right) nodes.push([node.right, depth + 1])
    }
  }
  return true
}
