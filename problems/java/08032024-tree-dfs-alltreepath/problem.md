---
solvedAt: "2024-03-08"
---
# All Tree Paths

- Language: java
- Original path: `java/tree-dfs/AllTreePath.java`
- Source: Algorithm practice
- Solution: `AllTreePath.java`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

## Examples

- Empty tree -> empty traversal, depth `0`, or `true` for vacuous validation depending on the task.
- Single-node tree -> depth `1` and one traversal value.
- Skewed tree -> traversal still follows the requested DFS/BFS order.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.
Time complexity: O(N^2) Where ‘N’ is the total number of nodes in the tree.
Space complexity: O(N * logN). Maximum leaves is N/2 => Maximum paths

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
