---
solvedAt: "2026-05-07"
---
# Longest Prefix Suffix

- Language: javascript
- Original path: `javascript/07052026-longest-prefix-subfix/code.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a string, return the longest proper prefix that is also a suffix of the same string. A proper prefix cannot be the entire string, so the answer must be shorter than the input. The matching suffix must end at the final character. If no non-empty prefix also appears as a suffix, return an empty string.

## Examples

- `"ababab"` -> `"abab"`.
- `"level"` -> `"l"`.
- `"abcd"` -> `""`.

# Solutions

Build the KMP prefix-length table while scanning the string once. The final table value gives the length of the longest prefix that also appears as a suffix, so return that leading slice.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty strings and one-character strings cannot have a proper prefix-suffix match.
- Repeated patterns such as `ababab` should return the longest valid overlap, not the first match.
- Strings with no repeated boundary characters should return an empty string.
