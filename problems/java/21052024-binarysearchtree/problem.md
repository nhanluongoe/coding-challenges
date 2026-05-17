---
solvedAt: "2024-05-21"
---
# Binary Search Tree

- Language: java
- Original path: `java/BinarySearchTree.java`
- Source: Algorithm practice
- Solution: `BinarySearchTree.java`

# Problems

Implement or exercise a binary search tree. Each node stores a value, values smaller than a node belong in its left subtree, and values greater than or equal to it follow the insertion rule used by the implementation. Operations such as insertion, search, or traversal should preserve the BST ordering invariant. The tree should handle an initially empty root and progressively added values.

## Examples

- Insert `5`, `3`, `7` -> `3` is in the left subtree and `7` is in the right subtree.
- Searching for an inserted value -> found.
- Searching for a value that was never inserted -> not found.

# Solutions

Compare each value with the current node and move left or right until the insertion, lookup, or traversal step is complete.

# Edge cases

- Empty tree.
- Duplicate values.
- Highly unbalanced insertion order.
