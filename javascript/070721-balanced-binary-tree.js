// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * https://leetcode.com/problems/balanced-binary-tree/
 *
 * @param {TreeNode} root
 * @return {boolean}
 */

const isBalanced = (root) => {
  if (!root) return true

  let leftHeight = getHeight(root.left)
  let rightHeight = getHeight(root.right)

  return (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};

const getHeight = (root) => {
  if (!root) return 0

  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}
