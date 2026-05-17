---
solvedAt: "2024-03-24"
---
# Permutations

- Language: java
- Original path: `java/subsets/Permutations.java`
- Source: Algorithm practice
- Solution: `Permutations.java`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(n * n!), "n!" permutations, take O(n) to insert a number
Space complexity: O(n * n!), "n!" permutations, each permutation contains "n"

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
