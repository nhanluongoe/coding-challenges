---
solvedAt: "2021-07-18"
---
# Binary Tree Preorder Traversal

- Language: ruby
- Original path: `ruby/180721-btree-preorder-traversal.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

## Examples

- Empty tree -> empty traversal, depth `0`, or `true` for vacuous validation depending on the task.
- Single-node tree -> depth `1` and one traversal value.
- Skewed tree -> traversal still follows the requested DFS/BFS order.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
