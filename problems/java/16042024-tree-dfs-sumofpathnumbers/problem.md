---
solvedAt: "2024-04-16"
---
# Sum of Path Numbers

- Language: java
- Original path: `java/tree-dfs/SumOfPathNumbers.java`
- Source: Algorithm practice
- Solution: `SumOfPathNumbers.java`

# Problems

Traverse or validate a binary tree according to the requested order, balance, depth, path, symmetry, or BST rule.

# Solutions

Use recursive depth-first traversal, returning the information each parent needs from its children.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty tree.
- Single-node tree.
- Skewed tree that stresses recursion depth or balance checks.
