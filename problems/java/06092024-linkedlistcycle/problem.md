---
solvedAt: "2024-09-06"
---
# Linked List Cycle

- Language: java
- Original path: `java/LinkedListCycle.java`
- Source: Algorithm practice
- Solution: `LinkedListCycle.java`

# Problems

Operate on linked-list structure to detect a cycle, locate a node, reverse links, or find an intersection.

## Examples

- Empty list -> `null` or `false`, depending on the operation.
- Single-node cycle check with no cycle -> `false`.
- Two lists sharing the same tail node -> return the shared node for intersection.

# Solutions

Use fast and slow pointers; if they meet, the list contains a cycle.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty list.
- Single-node list.
- Cycle or target node at the head.
