---
solvedAt: "2024-07-05"
---
# Queue

- Language: javascript
- Original path: `javascript/050724-queue.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Implement first-in, first-out queue behavior. Enqueue should add a value to the back, and dequeue should remove the oldest value from the front. For the two-stack variant, use stacks internally while preserving queue order externally. Define behavior for empty queues according to the implementation contract.

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
