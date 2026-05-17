---
solvedAt: "2024-01-03"
---
# Reverse Sub List

- Language: java
- Original path: `java/inplace-reversal-linkedlist/ReverseSubList.java`
- Source: Algorithm practice
- Solution: `ReverseSubList.java`

# Problems

Given the head of a linked list and two positions, reverse only the nodes within that inclusive position range. Nodes before and after the range should remain in their original relative order and reconnect to the reversed section. Return the head of the updated list. The implementation should handle reversing from the head and reversing a one-node range.

## Examples

- `1 -> 2 -> 3 -> 4 -> 5`, reverse positions `2..4` -> `1 -> 4 -> 3 -> 2 -> 5`.
- Reverse starting at the head -> returned head changes.
- Reverse one position -> list remains unchanged.

# Solutions

Find the node before the sub-list, reverse the requested range in place, then reconnect the reversed section to the unchanged prefix and suffix.

# Edge cases

- Sub-list starts at the head.
- Sub-list ends at the tail.
- Start and end positions are the same.
