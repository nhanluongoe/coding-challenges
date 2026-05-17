---
solvedAt: "2024-07-01"
---
# Subsets with Duplicates

- Language: java
- Original path: `java/subsets/SubsetWithDuplicates.java`
- Source: Algorithm practice
- Solution: `SubsetWithDuplicates.java`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(2^n)
Space complexity: O(2^n)

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
