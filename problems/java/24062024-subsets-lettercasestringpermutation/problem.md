---
solvedAt: "2024-06-24"
---
# Letter Case String Permutation

- Language: java
- Original path: `java/subsets/LetterCaseStringPermutation.java`
- Source: Algorithm practice
- Solution: `LetterCaseStringPermutation.java`

# Problems

Determine where a string contains a permutation or anagram of a given pattern.

# Solutions

Use a fixed-size sliding window with character counts and track when all pattern requirements are matched.
Time complexity: O(n * 2^n)
Space complexity: O(n * 2^n)

# Edge cases

- Pattern longer than the string.
- Repeated pattern characters.
- Match starts at index zero or at the final possible index.
