---
solvedAt: "2024-02-28"
---
# Top K Frequent Numbers

- Language: java
- Original path: `java/top-k-elements/TopKFrequentNumbers.java`
- Source: Algorithm practice
- Solution: `TopKFrequentNumbers.java`

# Problems

Use priority ordering to select, combine, or rearrange items according to a top-k, closest, kth, or minimum-cost rule.

# Solutions

Maintain a heap sized to the useful frontier so the next best candidate can be selected efficiently.
Time complexity: O(n + n*logk)
Space complexity: O(n)

# Edge cases

- `k` is zero or equals the input size.
- Duplicate priorities.
- Input smaller than the requested count.
