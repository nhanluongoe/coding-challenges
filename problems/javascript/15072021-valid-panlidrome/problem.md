---
solvedAt: "2021-07-15"
---
# Valid Palindrome

- Language: javascript
- Original path: `javascript/150721-valid-panlidrome.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Determine whether the input can form or already is a palindrome under the problem's normalization rules.

## Examples

- `"A man, a plan, a canal: Panama"` -> `true` for normalized palindrome checks.
- `"code"` -> `false` for palindrome-permutation checks.
- `"civic"` -> `true`.

# Solutions

Normalize ignored characters, then compare characters from both ends.

# Edge cases

- Mixed case and punctuation.
- Empty or one-character strings.
- Exactly one odd character count.
