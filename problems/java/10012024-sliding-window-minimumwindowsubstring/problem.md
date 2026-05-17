---
solvedAt: "2024-01-10"
---
# Minimum Window Substring

- Language: java
- Original path: `java/sliding-window/MinimumWindowSubstring.java`
- Source: Algorithm practice
- Solution: `MinimumWindowSubstring.java`

# Problems

Find the shortest substring of a string that contains every required character from a pattern with the right multiplicities.

# Solutions

Use a frequency map and sliding window, expanding until all requirements are met and shrinking to minimize the window.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Pattern longer than the string.
- Repeated characters in the pattern.
- No valid window.
