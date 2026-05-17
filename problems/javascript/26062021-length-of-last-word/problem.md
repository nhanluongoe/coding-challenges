---
solvedAt: "2021-06-26"
---
# Length of Last Word

- Language: javascript
- Original path: `javascript/260621-length-of-last-word.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Return the length of the last word in a string.

# Solutions

Trim trailing spaces, then count characters backward until the previous space or the start of the string.

# Edge cases

- Trailing spaces.
- Single word.
- Multiple spaces between words.
