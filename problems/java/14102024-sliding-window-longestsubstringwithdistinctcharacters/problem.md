---
solvedAt: "2024-10-14"
---
# Longest Substring with Distinct Characters

- Language: java
- Original path: `java/sliding-window/LongestSubstringWithDistinctCharacters.java`
- Source: Algorithm practice
- Solution: `LongestSubstringWithDistinctCharacters.java`

# Problems

Given a string, find the length of the longest contiguous substring that contains no repeated characters. The substring must preserve the original order and use adjacent characters. When a repeated character appears, the valid window must move past the earlier occurrence. Return the maximum length, not necessarily the substring itself.

## Examples

- `"aabccbb"` -> `3` from `"abc"`.
- `"aaaa"` -> `1`.
- `""` -> `0`.

# Solutions

Use a sliding window with last-seen positions or counts, moving the left boundary past duplicates.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty string.
- All characters identical.
- Duplicate appears after a long valid window.
