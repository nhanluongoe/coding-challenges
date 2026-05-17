---
solvedAt: "2024-09-13"
---
# Longest Substring with K Distinct Characters

- Language: java
- Original path: `java/sliding-window/LongestSubstringKDistinct.java`
- Source: Algorithm practice
- Solution: `LongestSubstringKDistinct.java`

# Problems

Find the longest substring containing no more than `k` distinct characters.

# Solutions

Track character frequencies in a sliding window and shrink while the number of distinct characters exceeds `k`.

# Edge cases

- `k` is zero.
- String has fewer than `k` distinct characters.
- Several windows share the maximum length.
