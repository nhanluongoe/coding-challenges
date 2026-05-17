---
solvedAt: "2024-01-31"
---
# Replacing Ones

- Language: java
- Original path: `java/sliding-window/ReplacingOnes.java`
- Source: Algorithm practice
- Solution: `ReplacingOnes.java`

# Problems

Given a string or binary array and a replacement budget `k`, find the longest contiguous window that can be made uniform by replacing at most `k` characters or flipping at most `k` zeros. The window is valid when all non-dominant values inside it can be covered by the budget. Return the maximum valid window length.

## Examples

- `"aabccbb"`, `k = 2` -> `5` after replacing two chars.
- `[0, 1, 1, 0, 0, 0, 1]`, `k = 2` -> longest ones window after two flips.
- `k = 0` -> longest already-uniform window.

# Solutions

Use a sliding window and keep the count of the dominant value; shrink when replacements needed exceed `k`.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- `k` is zero.
- `k` covers the whole input.
- Multiple values tie for most frequent.
