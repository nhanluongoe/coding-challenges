---
solvedAt: "2022-05-23"
---
# In Place Shuffle

- Language: javascript
- Original path: `javascript/230522-in-place-shuffle.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Randomly reorder the elements of an array in place. Every possible permutation should be equally likely, so each position must choose uniformly from the remaining unshuffled portion of the array. The function should not lose, duplicate, or create elements. Empty arrays, single-element arrays, and arrays with repeated values should still be valid inputs.

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
