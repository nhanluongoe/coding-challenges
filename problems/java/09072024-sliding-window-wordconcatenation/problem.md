---
solvedAt: "2024-07-09"
---
# Word Concatenation

- Language: java
- Original path: `java/sliding-window/WordConcatenation.java`
- Source: Algorithm practice
- Solution: `WordConcatenation.java`

# Problems

Find starting indices of substrings formed by concatenating every word from a list exactly once.

# Solutions

Slide over word-sized chunks and compare word frequencies inside each candidate window.
Time complexity: O(n * m * l), where n is number of characters in given
Space complexity: O(m + n)

# Edge cases

- Repeated words.
- Words not present in the string.
- Empty word list or mismatched word lengths.
