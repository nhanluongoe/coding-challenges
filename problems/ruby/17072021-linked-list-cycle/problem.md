---
solvedAt: "2021-07-17"
---
# Linked List Cycle

- Language: ruby
- Original path: `ruby/170721-linked-list-cycle.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given the head of a linked list, determine whether the list contains a cycle. A cycle exists when following `next` pointers eventually reaches a previously visited node instead of `null`. The function should return a boolean and should not modify the list. It must handle empty lists, one-node lists, and cycles that begin at the head or later in the list.

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
