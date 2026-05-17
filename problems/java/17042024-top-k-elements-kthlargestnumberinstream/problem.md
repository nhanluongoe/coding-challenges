---
solvedAt: "2024-04-17"
---
# Kth Largest Number in a Stream

- Language: java
- Original path: `java/top-k-elements/KthLargestNumberInStream.java`
- Source: Algorithm practice
- Solution: `KthLargestNumberInStream.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

## Examples

- `[3, 1, 5, 12, 2, 11]`, `k = 3` -> top values `[5, 11, 12]` for K-largest variants.
- `k = 1` -> return the single best candidate.
- `k` equal to input size -> every item may be included.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(logk)
Space complexity: O(k)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
