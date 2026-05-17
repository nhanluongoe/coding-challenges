---
solvedAt: "2022-05-14"
---
# In Place Reverse String

- Language: javascript
- Original path: `javascript/14052022-in-place-reverse-string.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an array of characters, reverse the characters in place. The function should mutate the input array rather than allocating and returning a separate reversed array. Swap matching positions from the ends toward the center until the whole array is reversed. Empty and single-character arrays should remain valid.

## Examples

- `["a", "b", "c"]` -> `["c", "b", "a"]`.
- `[]` -> `[]`.
- `["x"]` -> `["x"]`.

# Solutions

Swap characters from both ends while moving two pointers toward the center.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Empty array.
- Odd-length array.
- Single character.
