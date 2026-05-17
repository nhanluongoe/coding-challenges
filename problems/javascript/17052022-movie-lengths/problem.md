---
solvedAt: "2022-05-17"
---
# Movie Lengths

- Language: javascript
- Original path: `javascript/17052022-movie-lengths.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a flight length and a list of movie lengths, determine whether two different movies exactly fill the flight time. Each movie can be used at most once, so a pair of identical durations requires two separate entries. Return a boolean result. The solution should handle cases where no pair exists without scanning every pair unnecessarily.

## Examples

- Movie lengths `[2, 4]`, flight `6` -> `true`.
- `[2, 4]`, flight `1` -> `false`.
- `[3, 3]`, flight `6` -> `true` only if two separate movies exist.

# Solutions

Scan lengths while storing complements in a set, returning true when the current length completes a pair.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Two identical lengths are needed.
- No pair exists.
- Very short flight length.
