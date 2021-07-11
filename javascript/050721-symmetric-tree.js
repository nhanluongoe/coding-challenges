/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isSymmetric = (root) => {
  const leftSide = rootLeftRightTraversal(root.left)
  const rightSide = rootRightLeftTraversal(root.right)

  return isArrayEqual(leftSide, rightSide)
}

const rootLeftRightTraversal = (root) => {
  if (!root) return [root]

  return [root.val]
    .concat(rootLeftRightTraversal(root.left))
    .concat(rootLeftRightTraversal(root.right))
}

const rootRightLeftTraversal = (root) => {
  if (!root) return [root]

  return [root.val]
    .concat(rootRightLeftTraversal(root.right))
    .concat(rootRightLeftTraversal(root.left))
}

const isArrayEqual = (arr1, arr2) => {
  return (
    arr1.length === arr2.length && arr1.every((val, idx) => val === arr2[idx])
  )
}
