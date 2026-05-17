---
solvedAt: "2024-03-23"
---
# Middle of Linked List

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/middle-of-linked-list.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Operate on linked-list structure to detect a cycle, locate a node, reverse links, or find an intersection.

## Examples

- Empty list -> `null` or `false`, depending on the operation.
- Single-node cycle check with no cycle -> `false`.
- Two lists sharing the same tail node -> return the shared node for intersection.

# Solutions

Use pointer techniques that preserve node identity and adjust links without copying node values.

# Edge cases

- Empty list.
- Single-node list.
- Cycle or target node at the head.
