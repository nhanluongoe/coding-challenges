---
solvedAt: "2022-05-14"
---
# In Place Word Reverse

- Language: javascript
- Original path: `javascript/14052022-in-place-word-reverse.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Reverse the order of words in a message while preserving the characters within each word.

# Solutions

Reverse the whole character array, then reverse each word range in place.
Time complexity: O(n)
Space complexity: O(1)

# Edge cases

- Leading or trailing spaces.
- Multiple spaces.
- One-word input.
