---
solvedAt: "2022-05-17"
---
# Movie Lengths

- Language: javascript
- Original path: `javascript/17052022-movie-lengths.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Determine whether two movie lengths exactly fill a flight length.

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
