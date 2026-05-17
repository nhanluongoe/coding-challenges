---
solvedAt: "2024-07-04"
---
# Subsets

- Language: java
- Original path: `java/subsets/Subsets.java`
- Source: Algorithm practice
- Solution: `Subsets.java`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

## Examples

- `[1, 2]` -> subsets `[[], [1], [2], [1, 2]]` for subset variants.
- `"ab"` -> case permutations such as `"ab"`, `"aB"`, `"Ab"`, `"AB"` for letter-case variants.
- `n = 1` for parentheses -> `["()"]`.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(2^n)
Space complexity: O(2^n)

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
