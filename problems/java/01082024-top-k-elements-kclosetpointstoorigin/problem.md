---
solvedAt: "2024-08-01"
---
# K Closest Points to Origin

- Language: java
- Original path: `java/top-k-elements/KClosetPointsToOrigin.java`
- Source: Algorithm practice
- Solution: `KClosetPointsToOrigin.java`

# Problems

Given a collection of values, select or arrange items according to a priority rule such as top `k`, kth smallest, closest to a target, minimum connection cost, or maximum distinct count. The output should include only the requested items or final value, not a fully sorted copy unless that is part of the problem. Priority queues are useful because only a limited frontier of candidates matters at any time.

## Examples

- `[3, 1, 5, 12, 2, 11]`, `k = 3` -> top values `[5, 11, 12]` for K-largest variants.
- `k = 1` -> return the single best candidate.
- `k` equal to input size -> every item may be included.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(k*logk + (n - k)*logk)
Space complexity: O(k)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
