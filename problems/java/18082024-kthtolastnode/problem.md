---
solvedAt: "2024-08-18"
---
# Kth to Last Node

- Language: java
- Original path: `java/KthToLastNode.java`
- Source: Algorithm practice
- Solution: `KthToLastNode.java`

# Problems

Given the head of a singly linked list and a positive integer `k`, return the kth node from the end of the list. The last node is the 1st-to-last node. The solution should preserve the list and should not require knowing its length ahead of time if a two-pointer approach is used. Invalid `k` values should follow the behavior defined by the implementation.

## Examples

- List `1 -> 2 -> 3 -> 4`, `k = 1` -> node `4`.
- List `1 -> 2 -> 3 -> 4`, `k = 2` -> node `3`.
- `k` equal to list length -> head node.

# Solutions

Advance a lead pointer `k` nodes ahead, then move lead and follow pointers together until lead reaches the end.

# Edge cases

- `k` is one.
- `k` equals list length.
- `k` is larger than the list length.
