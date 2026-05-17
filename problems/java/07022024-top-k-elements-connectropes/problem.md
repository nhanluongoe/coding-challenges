---
solvedAt: "2024-02-07"
---
# Connect Ropes

- Language: java
- Original path: `java/top-k-elements/ConnectRopes.java`
- Source: Algorithm practice
- Solution: `ConnectRopes.java`

# Problems

Given a collection of values, select or arrange items according to a priority rule such as top `k`, kth smallest, closest to a target, minimum connection cost, or maximum distinct count. The output should include only the requested items or final value, not a fully sorted copy unless that is part of the problem. Priority queues are useful because only a limited frontier of candidates matters at any time.

## Examples

- `[3, 1, 5, 12, 2, 11]`, `k = 3` -> top values `[5, 11, 12]` for K-largest variants.
- `k = 1` -> return the single best candidate.
- `k` equal to input size -> every item may be included.

# Solutions

Put rope lengths in a min-heap, repeatedly connect the two shortest ropes, and add each connection cost.
Time complexity: O(n*logn)
Space complexity: O(n)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
