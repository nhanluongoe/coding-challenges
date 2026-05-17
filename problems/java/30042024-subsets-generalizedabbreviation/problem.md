---
solvedAt: "2024-04-30"
---
# Generalized Abbreviation

- Language: java
- Original path: `java/subsets/GeneralizedAbbreviation.java`
- Source: Algorithm practice
- Solution: `GeneralizedAbbreviation.java`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(n * 2^n), n is the length of the word
Space complexity: O(n * 2^n)

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
