---
solvedAt: "2024-07-05"
---
# Queue

- Language: javascript
- Original path: `javascript/050724-queue.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement queue behavior, either directly or by using two stacks.

## Examples

- Enqueue `1`, enqueue `2`, dequeue -> `1`.
- Dequeue again -> `2`.
- Dequeue from empty queue -> `null`, `undefined`, or an error based on the API.

# Solutions

Maintain head and tail links so enqueue and dequeue are constant time.

# Edge cases

- Dequeue from empty queue.
- Single element transitions.
- Alternating enqueue and dequeue calls.
