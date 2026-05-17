---
solvedAt: "2021-06-26"
---
# Length of Last Word

- Language: ruby
- Original path: `ruby/260621-length-of-last-word.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given a string containing words and spaces, return the length of the final word. A word is the last contiguous group of non-space characters after ignoring trailing spaces. The function should not count spaces after the last word and should handle strings with one word or multiple spaces between words.

## Examples

- `"Hello World"` -> `5`.
- `"Hello World   "` -> `5`.
- `"a"` -> `1`.

# Solutions

Trim trailing spaces, then count characters backward until the previous space or the start of the string.

# Edge cases

- Trailing spaces.
- Single word.
- Multiple spaces between words.
