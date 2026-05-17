---
solvedAt: "2024-05-15"
---
# Maximum Distinct Elements

- Language: java
- Original path: `java/top-k-elements/MaximumDistinctElements.java`
- Source: Algorithm practice
- Solution: `MaximumDistinctElements.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(n*logn + k*logn)
Space complexity: O(n)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
