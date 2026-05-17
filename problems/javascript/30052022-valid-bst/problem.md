---
solvedAt: "2022-05-30"
---
# Valid BST

- Language: javascript
- Original path: `javascript/300522-valid-bst.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

## Examples

- Empty tree -> empty traversal, depth `0`, or `true` for vacuous validation depending on the task.
- Single-node tree -> depth `1` and one traversal value.
- Skewed tree -> traversal still follows the requested DFS/BFS order.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
