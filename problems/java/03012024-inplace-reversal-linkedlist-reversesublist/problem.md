---
solvedAt: "2024-01-03"
---
# Reverse Sub List

- Language: java
- Original path: `java/inplace-reversal-linkedlist/ReverseSubList.java`
- Source: Algorithm practice
- Solution: `ReverseSubList.java`

# Problems

Operate on linked-list structure to detect a cycle, locate a node, reverse links, or find an intersection.

## Examples

- Empty list -> `null` or `false`, depending on the operation.
- Single-node cycle check with no cycle -> `false`.
- Two lists sharing the same tail node -> return the shared node for intersection.

# Solutions

Use pointer techniques that preserve node identity and adjust links without copying node values.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty list.
- Single-node list.
- Cycle or target node at the head.
