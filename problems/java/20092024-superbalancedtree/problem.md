---
solvedAt: "2024-09-20"
---
# Superbalanced Tree

- Language: java
- Original path: `java/SuperBalancedTree.java`
- Source: Algorithm practice
- Solution: `SuperBalancedTree.java`

# Problems

Given a binary tree or binary search tree, compute or validate the requested property using the tree's node structure. The task may ask for traversal order, maximum or minimum depth, balance, symmetry, path sums, level-order links, BST validity, or a specific ranked node. The solution should handle empty trees and single-node trees and should preserve the meaning of left and right child relationships.

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
