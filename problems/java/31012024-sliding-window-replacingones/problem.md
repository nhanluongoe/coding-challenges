---
solvedAt: "2024-01-31"
---
# Replacing Ones

- Language: java
- Original path: `java/sliding-window/ReplacingOnes.java`
- Source: Algorithm practice
- Solution: `ReplacingOnes.java`

# Problems

Find the longest window that can be made uniform by replacing at most `k` characters or zeros.

# Solutions

Use a sliding window and keep the count of the dominant value; shrink when replacements needed exceed `k`.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- `k` is zero.
- `k` covers the whole input.
- Multiple values tie for most frequent.
