---
solvedAt: "2021-07-06"
---
# Maximum Depth of Binary Tree

- Language: ruby
- Original path: `ruby/060721-maximum-depth-of-bianry-tree.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
