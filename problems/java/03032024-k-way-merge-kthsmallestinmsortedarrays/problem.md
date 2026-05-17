---
solvedAt: "2024-03-03"
---
# Kth Smallest in M Sorted Arrays

- Language: java
- Original path: `java/k-way-merge/KthSmallestInMSortedArrays.java`
- Source: Algorithm practice
- Solution: `KthSmallestInMSortedArrays.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(n*logk), n is total numbers in arrays
Space complexity: O(k)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
