---
solvedAt: "2024-02-24"
---
# Queue with Two Stacks

- Language: java
- Original path: `java/QueueTwoStacks.java`
- Source: Algorithm practice
- Solution: `QueueTwoStacks.java`

# Problems

Implement first-in, first-out queue behavior. Enqueue should add a value to the back, and dequeue should remove the oldest value from the front. For the two-stack variant, use stacks internally while preserving queue order externally. Define behavior for empty queues according to the implementation contract.

## Examples

- Enqueue `1`, enqueue `2`, dequeue -> `1`.
- Dequeue again -> `2`.
- Dequeue from empty queue -> `null`, `undefined`, or an error based on the API.

# Solutions

Push new items onto an input stack and move items to an output stack only when dequeuing from an empty output stack.

# Edge cases

- Dequeue from empty queue.
- Single element transitions.
- Alternating enqueue and dequeue calls.
