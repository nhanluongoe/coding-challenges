---
solvedAt: "2022-05-16"
---
# First Come First Served

- Language: javascript
- Original path: `javascript/16052022-check-fcfs.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given take-out orders, dine-in orders, and the final served order sequence, verify whether orders were served first-come, first-served while preserving the relative order within each source queue. The served list may interleave the two queues, but it cannot reorder either queue internally. Return `true` only when the served sequence uses every order exactly as a valid merge of the two source sequences.

## Examples

- Take-out `[1, 4]`, dine-in `[2, 3]`, served `[1, 2, 3, 4]` -> `true`.
- Served `[1, 3, 2, 4]` -> `false` because dine-in order changed.
- One source list empty -> served must match the other source exactly.

# Solutions

Walk the served list and consume from the front of whichever source queue matches each served order.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- One source queue is empty.
- Served order has missing or extra orders.
- Duplicate order IDs.
