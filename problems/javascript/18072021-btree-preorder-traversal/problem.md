---
solvedAt: "2021-07-18"
---

# Btree Preorder Traversal

- Language: javascript
- Original path: `javascript/180721-btree-preorder-traversal.js`
- Solution: `code.js`

## References

- https://leetcode.com/problems/binary-tree-preorder-traversal/

## Notes

### Note 1

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

### Note 2

https://leetcode.com/problems/binary-tree-preorder-traversal/

@param {TreeNode} root
@return {number[]}
