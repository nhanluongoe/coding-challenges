/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 *
 * @param {TreeNode} root
 * @return {number}
 */

const minDepth = (root) => {
  return !isFinite(minDepthHelper(root)) ? 0 : minDepthHelper(root);
};

const minDepthHelper = (root) => {
  if (!root) return Infinity;

  if (isLeaf(root)) return 1;

  return 1 + Math.min(minDepthHelper(root.left), minDepthHelper(root.right));
};

const isLeaf = (node) => {
  return node && !(node.left || node.right);
};
