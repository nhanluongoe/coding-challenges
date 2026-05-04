# Symmetric Tree

- Language: javascript
- Original path: `javascript/050721-symmetric-tree.js`
- Solution: `code.js`

## Notes

### Note 1

Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

### Note 2

@param {TreeNode} root
@return {boolean}
