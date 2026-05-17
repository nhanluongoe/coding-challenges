---
solvedAt: "2022-05-18"
---
# Permutation Palindrome

- Language: javascript
- Original path: `javascript/18052022-permutation-panlidrome.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Generate every valid combination, subset, permutation, abbreviation, or parenthesized string requested by the input.

# Solutions

Use iterative breadth expansion or backtracking, adding choices one position at a time and pruning invalid states.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty input.
- Duplicate input values.
- Maximum branching depth for the input size.
