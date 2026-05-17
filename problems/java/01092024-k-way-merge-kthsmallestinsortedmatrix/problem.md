---
solvedAt: "2024-09-01"
---
# Kth Smallest in Sorted Matrix

- Language: java
- Original path: `java/k-way-merge/KthSmallestInSortedMatrix.java`
- Source: Algorithm practice
- Solution: `KthSmallestInSortedMatrix.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

## Examples

- `[3, 1, 5, 12, 2, 11]`, `k = 3` -> top values `[5, 11, 12]` for K-largest variants.
- `k = 1` -> return the single best candidate.
- `k` equal to input size -> every item may be included.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(k*logn)
Space complexity: O(n)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
