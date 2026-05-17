---
solvedAt: "2024-03-24"
---
# Permutations

- Language: java
- Original path: `java/subsets/Permutations.java`
- Source: Algorithm practice
- Solution: `Permutations.java`

# Problems

Generate every valid arrangement described by the input: subsets, permutations, letter-case variants, generalized abbreviations, or balanced parentheses. The result should include all valid combinations without missing any and should avoid duplicates when the input contains repeated values. Build candidates step by step, only keeping states that can still lead to valid output.

## Examples

- `[1, 2]` -> subsets `[[], [1], [2], [1, 2]]` for subset variants.
- `"ab"` -> case permutations such as `"ab"`, `"aB"`, `"Ab"`, `"AB"` for letter-case variants.
- `n = 1` for parentheses -> `["()"]`.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(n * n!), "n!" permutations, take O(n) to insert a number
Space complexity: O(n * n!), "n!" permutations, each permutation contains "n"

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
