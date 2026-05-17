---
solvedAt: "2024-12-11"
---
# String Anagrams

- Language: java
- Original path: `java/sliding-window/StringAnagrams.java`
- Source: Algorithm practice
- Solution: `StringAnagrams.java`

# Problems

Determine where a string contains a permutation or anagram of a given pattern.

## Examples

- `"oidbcaf"`, pattern `"abc"` -> match at substring `"bca"`.
- Pattern longer than string -> no match.
- Repeated pattern chars such as `"aab"` require two `a` characters.

# Solutions

Use a fixed-size sliding window with character counts and track when all pattern requirements are matched.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Pattern longer than the string.
- Repeated pattern characters.
- Match starts at index zero or at the final possible index.
