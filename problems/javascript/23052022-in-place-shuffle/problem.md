---
solvedAt: "2022-05-23"
---
# In Place Shuffle

- Language: javascript
- Original path: `javascript/230522-in-place-shuffle.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Randomly shuffle an array in place so every permutation is equally likely.

## Examples

- `[]` -> `[]`.
- `[1]` -> `[1]`.
- `[1, 2, 3]` -> any permutation containing exactly `1`, `2`, and `3`.

# Solutions

Use the Fisher-Yates algorithm: for each position, swap it with a uniformly random position from the remaining range.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty or one-element array.
- Repeated values.
- Random index bounds must include both endpoints correctly.
