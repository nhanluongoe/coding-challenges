/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const isLeaf = (node) => node && !(node.left || node.right)

const minDepthHelper = (root) => {
  if (!root) return Infinity

  if (isLeaf(root)) return 1

  return 1 + Math.min(minDepthHelper(root.left), minDepthHelper(root.right))
}

/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  return !isFinite(minDepthHelper(root)) ? 0 : minDepthHelper(root)
}

// shorter solution
const betterMinDepth = (root) => {
  if (!root) return 0

  const leftHeight = betterMinDepth(root.left)
  const rightHeight = betterMinDepth(root.right)

  if (leftHeight === 0 || rightHeight === 0) {
    return 1 + leftHeight + rightHeight
  }

  return 1 + Math.min(leftHeight, rightHeight)
}
