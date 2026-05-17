---
solvedAt: "2024-02-23"
---
# K Largest Numbers

- Language: java
- Original path: `java/top-k-elements/KLargestNumbers.java`
- Source: Algorithm practice
- Solution: `KLargestNumbers.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(k*logk + (n-k)*logk)
Space complexity: O(k)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
