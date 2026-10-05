---
solvedAt: "2026-10-05"
---
# Remove the Kth Last Node From a Linked List

- Language: typescript
- Original path: `typescript/05102026-remove-kth-last-node-linked-list/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Return the head of a singly linked list after removing its `k`th node from the end.

## Example

```text
Input:  1 -> 2 -> 4 -> 7 -> 3, k = 2
Output: 1 -> 2 -> 4 -> 3
```

The second-to-last node contains `7`, so it is removed.

# Constraints

- The linked list contains at least one node.
- `1 <= k <=` the number of nodes in the linked list.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- Removing the head of the linked list.
- Removing the tail of the linked list.
- Removing the only node in the linked list.
- A linked list containing duplicate values.
