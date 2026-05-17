---
solvedAt: "2024-10-25"
---
# Word Concatenation

- Language: javascript
- Original path: `javascript/sliding-window/word-concatenation.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Find starting indices of substrings formed by concatenating every word from a list exactly once.

# Solutions

Slide over word-sized chunks and compare word frequencies inside each candidate window.
Time complexity: O(n * m * l), where n is number of characters in given string
Space complexity: O(m + n)

# Edge cases

- Repeated words.
- Words not present in the string.
- Empty word list or mismatched word lengths.
