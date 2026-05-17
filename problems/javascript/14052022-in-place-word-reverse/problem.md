---
solvedAt: "2022-05-14"
---
# In Place Word Reverse

- Language: javascript
- Original path: `javascript/14052022-in-place-word-reverse.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a message represented as characters or words, reverse the order of the words while keeping the letters inside each word in the correct order. The solution should work in place when the input is a mutable character array. Spacing rules should follow the implementation contract, but the main requirement is that the word sequence is reversed.

## Examples

- `"cake pound steal"` -> `"steal pound cake"`.
- `"hello"` -> `"hello"`.
- Extra spaces should follow the variant's spacing rules.

# Solutions

Reverse the whole character array, then reverse each word range in place.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Leading or trailing spaces.
- Multiple spaces.
- One-word input.
