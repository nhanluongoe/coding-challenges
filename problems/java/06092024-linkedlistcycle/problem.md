---
solvedAt: "2024-09-06"
---
# Linked List Cycle

- Language: java
- Original path: `java/LinkedListCycle.java`
- Source: Algorithm practice
- Solution: `LinkedListCycle.java`

# Problems

Given the head of a linked list, determine whether the list contains a cycle. A cycle exists when following `next` pointers eventually reaches a previously visited node instead of `null`. The function should return a boolean and should not modify the list. It must handle empty lists, one-node lists, and cycles that begin at the head or later in the list.

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
