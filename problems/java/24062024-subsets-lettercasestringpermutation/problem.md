---
solvedAt: "2024-06-24"
---
# Letter Case String Permutation

- Language: java
- Original path: `java/subsets/LetterCaseStringPermutation.java`
- Source: Algorithm practice
- Solution: `LetterCaseStringPermutation.java`

# Problems

Given a string and a pattern, determine whether the string contains a contiguous substring that is a permutation of the pattern, or return all starting indices for such substrings depending on the variant. The substring length must equal the pattern length and must match the pattern's character counts exactly. Repeated characters in the pattern must be respected. Return the boolean or list required by the current solution.

## Examples

- `"oidbcaf"`, pattern `"abc"` -> match at substring `"bca"`.
- Pattern longer than string -> no match.
- Repeated pattern chars such as `"aab"` require two `a` characters.

# Solutions

Use a fixed-size sliding window with character counts and track when all pattern requirements are matched.
Time complexity: O(n * 2^n)
Space complexity: O(n * 2^n)

# Edge cases

- Pattern longer than the string.
- Repeated pattern characters.
- Match starts at index zero or at the final possible index.
