---
solvedAt: "2024-04-30"
---
# Generalized Abbreviation

- Language: java
- Original path: `java/subsets/GeneralizedAbbreviation.java`
- Source: Algorithm practice
- Solution: `GeneralizedAbbreviation.java`

# Problems

Generate every valid arrangement described by the input: subsets, permutations, letter-case variants, generalized abbreviations, or balanced parentheses. The result should include all valid combinations without missing any and should avoid duplicates when the input contains repeated values. Build candidates step by step, only keeping states that can still lead to valid output.

## Examples

- `[1, 2]` -> subsets `[[], [1], [2], [1, 2]]` for subset variants.
- `"ab"` -> case permutations such as `"ab"`, `"aB"`, `"Ab"`, `"AB"` for letter-case variants.
- `n = 1` for parentheses -> `["()"]`.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(n * 2^n), n is the length of the word
Space complexity: O(n * 2^n)

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
