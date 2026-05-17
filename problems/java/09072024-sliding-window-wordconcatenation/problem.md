---
solvedAt: "2024-07-09"
---
# Word Concatenation

- Language: java
- Original path: `java/sliding-window/WordConcatenation.java`
- Source: Algorithm practice
- Solution: `WordConcatenation.java`

# Problems

Given a string and a list of words with equal length, find every starting index where a substring is made by concatenating all words exactly once and without extra characters. The words may appear in any order, but each required word must be used the correct number of times. Return all valid starting positions in ascending order. If no complete concatenation appears, return an empty list.

## Examples

- `"catfoxcat"`, words `["cat", "fox"]` -> indices `[0, 3]`.
- Repeated words must appear the required number of times.
- No complete concatenation -> `[]`.

# Solutions

Slide over word-sized chunks and compare word frequencies inside each candidate window.
Time complexity: O(n * m * l), where n is number of characters in given
Space complexity: O(m + n)

# Edge cases

- Repeated words.
- Words not present in the string.
- Empty word list or mismatched word lengths.
