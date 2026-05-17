---
solvedAt: "2024-03-14"
---
# Level Order Traversal

- Language: java
- Original path: `java/tree-bfs/LevelOrderTraversal.java`
- Source: Algorithm practice
- Solution: `LevelOrderTraversal.java`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

## Examples

- Empty tree -> empty traversal, depth `0`, or `true` for vacuous validation depending on the task.
- Single-node tree -> depth `1` and one traversal value.
- Skewed tree -> traversal still follows the requested DFS/BFS order.

# Solutions

Use breadth-first traversal with a queue, processing one level at a time when level boundaries matter.
Time complexity: O(n) we have "n" nodes
Space complexity: O(n)

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
