---
solvedAt: "2024-11-21"
---
# Sum of Elements

- Language: java
- Original path: `java/top-k-elements/SumOfElements.java`
- Source: Algorithm practice
- Solution: `SumOfElements.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(k1*logk1 + (n-k1)*logk1 + k2*logk2 + (n-k2)*logk2 + n)
Space complexity: O(k1 + k2)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
