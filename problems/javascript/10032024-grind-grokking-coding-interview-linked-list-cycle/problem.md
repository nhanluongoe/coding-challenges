---
solvedAt: "2024-03-10"
---
# Linked List Cycle

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/linked-list-cycle.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Operate on linked-list structure to detect a cycle, locate a node, reverse links, or find an intersection.

## Examples

- Empty list -> `null` or `false`, depending on the operation.
- Single-node cycle check with no cycle -> `false`.
- Two lists sharing the same tail node -> return the shared node for intersection.

# Solutions

Use fast and slow pointers; if they meet, the list contains a cycle.

# Edge cases

- Empty list.
- Single-node list.
- Cycle or target node at the head.
