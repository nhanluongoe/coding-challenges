---
solvedAt: "2024-09-13"
---
# Longest Substring with K Distinct Characters

- Language: java
- Original path: `java/sliding-window/LongestSubstringKDistinct.java`
- Source: Algorithm practice
- Solution: `LongestSubstringKDistinct.java`

# Problems

Given a string and a number `k`, find the length of the longest contiguous substring containing at most `k` distinct characters. The window may include repeated characters as long as the number of different characters stays within the limit. If the string has fewer than `k` distinct characters, the entire string may be valid. A `k` value of zero should produce a zero-length result.

## Examples

- `"araaci"`, `k = 2` -> `4` from `"araa"`.
- `k = 0` -> `0`.
- String with fewer than `k` distinct chars -> whole string length.

# Solutions

Track character frequencies in a sliding window and shrink while the number of distinct characters exceeds `k`.

# Edge cases

- `k` is zero.
- String has fewer than `k` distinct characters.
- Several windows share the maximum length.
