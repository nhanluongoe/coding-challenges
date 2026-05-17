---
solvedAt: "2024-06-24"
---
# Intersection with

- Language: javascript
- Original path: `javascript/240624-intersection-with.js`
- Source: JavaScript utility
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
