---
solvedAt: "2024-10-14"
---
# Longest Substring with Distinct Characters

- Language: java
- Original path: `java/sliding-window/LongestSubstringWithDistinctCharacters.java`
- Source: Algorithm practice
- Solution: `LongestSubstringWithDistinctCharacters.java`

# Problems

Find the length of the longest substring with no repeated characters.

# Solutions

Use a sliding window with last-seen positions or counts, moving the left boundary past duplicates.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty string.
- All characters identical.
- Duplicate appears after a long valid window.
