// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal = (root) => {
  res = [];

  const memoFunc = (root) => {
    if (root?.left) memoFunc(root.left);
    res.push(root?.val);
    if (root?.right) memoFunc(root.right);
  };

  memoFunc(root);

  return res.filter((elem) => elem);
};
