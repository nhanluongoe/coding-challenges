/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

const preorderTraversal = (root) => {
  if (!root) return []

  return [root.val]
    .concat(preorderTraversal(root.left))
    .concat(preorderTraversal(root.right))
}
