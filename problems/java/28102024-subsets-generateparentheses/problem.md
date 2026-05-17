---
solvedAt: "2024-10-28"
---
# Generate Parentheses

- Language: java
- Original path: `java/subsets/GenerateParentheses.java`
- Source: Algorithm practice
- Solution: `GenerateParentheses.java`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

## Examples

- `[1, 2]` -> subsets `[[], [1], [2], [1, 2]]` for subset variants.
- `"ab"` -> case permutations such as `"ab"`, `"aB"`, `"Ab"`, `"AB"` for letter-case variants.
- `n = 1` for parentheses -> `["()"]`.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: ? https://en.wikipedia.org/wiki/Central_binomial_coefficient
Space complexity: O(N * 2^n), since can't have more than 2^n combinations

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
