---
solvedAt: "2024-09-03"
---
# Rearrange String

- Language: java
- Original path: `java/top-k-elements/RearrangeString.java`
- Source: Algorithm practice
- Solution: `RearrangeString.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(n*logn)
Space complexity: O(n)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
