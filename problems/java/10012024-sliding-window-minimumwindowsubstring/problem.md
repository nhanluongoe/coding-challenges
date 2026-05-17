---
solvedAt: "2024-01-10"
---
# Minimum Window Substring

- Language: java
- Original path: `java/sliding-window/MinimumWindowSubstring.java`
- Source: Algorithm practice
- Solution: `MinimumWindowSubstring.java`

# Problems

Given a source string and a pattern string, find the shortest substring of the source that contains every character required by the pattern. Character multiplicity matters, so a pattern containing two copies of a character requires two copies in the window. If several windows contain the pattern, return the shortest one; if no window qualifies, return an empty string or the variant's no-result value.

## Examples

- `"ADOBECODEBANC"`, pattern `"ABC"` -> `"BANC"`.
- Pattern longer than string -> `""`.
- `"aa"`, pattern `"aa"` -> `"aa"`.

# Solutions

Use a frequency map and sliding window, expanding until all requirements are met and shrinking to minimize the window.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Pattern longer than the string.
- Repeated characters in the pattern.
- No valid window.
