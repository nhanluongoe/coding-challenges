---
solvedAt: "2026-10-05"
---
# Linked List Intersection

- Language: typescript
- Original path: `typescript/05102026-linked-list-intersection/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Return the node where two singly linked lists intersect. If the linked lists do not intersect, return `null`.

An intersection means both lists reference the same node object, not merely nodes containing the same value. From the intersection onward, both lists share the same remaining nodes.

## Example

```text
A: 1 -> 3 -> 4 \
                 8 -> 7 -> 2
B:      6 -> 4 /

Output: Node 8
```

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- The linked lists do not intersect.
- The lists intersect at their heads.
- The lists intersect at their tails.
- One or both lists are empty.
- Separate nodes contain equal values but are not an intersection.
