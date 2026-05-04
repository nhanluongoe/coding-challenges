// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * https://leetcode.com/problems/same-tree/
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  const arrTree1 = preorderTraversal(p)
  const arrTree2 = preorderTraversal(q)

  return isArrayEqual(arrTree1, arrTree2)
}

const preorderTraversal = (root) => {
  if (!root) return [root]

  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right))
}

const isArrayEqual = (arr1, arr2) => {
  const isSameLength = arr1.length === arr2.length

  const isSameValue = arr1.every((val, idx) => val === arr2[idx])

  return isSameLength && isSameValue
}
