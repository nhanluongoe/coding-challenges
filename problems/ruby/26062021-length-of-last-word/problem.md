---
solvedAt: "2021-06-26"
---
# Length of Last Word

- Language: ruby
- Original path: `ruby/260621-length-of-last-word.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Return the length of the last word in a string.

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
