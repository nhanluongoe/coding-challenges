// Definition for a binary tree node.
export function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  if (!root) return [];

  return inorderTraversal(root.left)
    .concat(root.val)
    .concat(inorderTraversal(root.right));
};

export default inorderTraversal;
