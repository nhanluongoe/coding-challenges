---
solvedAt: "2024-03-23"
---
# Middle of Linked List

- Language: javascript
- Original path: `javascript/grind-grokking-coding-interview/middle-of-linked-list.js`
- Source: Grokking-pattern
- Solution: `code.js`

# Problems

Given the head of a singly linked list, return the middle node. If the list has an odd number of nodes, return the exact middle. If it has an even number of nodes, follow the implementation's convention, commonly returning the second of the two middle nodes. The solution should walk the list by pointers without first converting it to an array.

## Examples

- `1 -> 2 -> 3 -> 4 -> 5` -> node `3`.
- `1 -> 2 -> 3 -> 4 -> 5 -> 6` -> node `4` for the second-middle convention.
- Single-node list -> that node.

# Solutions

Use slow and fast pointers; move slow one step and fast two steps until fast reaches the end.

# Edge cases

- Empty list.
- Single-node list.
- Even-length list.
