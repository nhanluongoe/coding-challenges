---
solvedAt: "2024-04-11"
---
# Tree Path Sum

- Language: java
- Original path: `java/tree-dfs/TreePathSum.java`
- Source: Algorithm practice
- Solution: `TreePathSum.java`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

## Examples

- Empty tree -> empty traversal, depth `0`, or `true` for vacuous validation depending on the task.
- Single-node tree -> depth `1` and one traversal value.
- Skewed tree -> traversal still follows the requested DFS/BFS order.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.
Time complexity: O(n) visit n nodes
Space complexity: O(n) store the recursion stack

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
