---
solvedAt: "2024-02-07"
---
# Connect Ropes

- Language: java
- Original path: `java/top-k-elements/ConnectRopes.java`
- Source: Algorithm practice
- Solution: `ConnectRopes.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

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
