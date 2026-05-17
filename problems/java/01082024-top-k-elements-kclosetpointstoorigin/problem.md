---
solvedAt: "2024-08-01"
---
# K Closest Points to Origin

- Language: java
- Original path: `java/top-k-elements/KClosetPointsToOrigin.java`
- Source: Algorithm practice
- Solution: `KClosetPointsToOrigin.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(k*logk + (n - k)*logk)
Space complexity: O(k)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
