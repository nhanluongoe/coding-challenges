---
solvedAt: "2024-06-28"
---
# Reverse Linked List

- Language: java
- Original path: `java/ReverseLinkedList.java`
- Source: Algorithm practice
- Solution: `ReverseLinkedList.java`

# Problems

Given the head of a singly linked list, reverse the list so every node points to its previous node. Return the new head after reversal. The operation should preserve all existing nodes and should not create a separate list unless the variant allows it. Empty and single-node lists should be valid base cases.

## Examples

- `1 -> 2 -> 3` -> `3 -> 2 -> 1`.
- Empty list -> `null`.
- Single-node list -> same node.

# Solutions

Iterate through the list while redirecting each node's `next` pointer to the previous node, then return the last processed node as the new head.

# Edge cases

- Empty list.
- Single-node list.
- Long list with all links reversed.
