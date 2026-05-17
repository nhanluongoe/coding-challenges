---
solvedAt: "2021-07-03"
---
# Binary Tree Inorder Traversal

- Language: javascript
- Original path: `javascript/030721-binary-tree-inorder-traversal.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
