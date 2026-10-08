---
solvedAt: "2026-10-08"
---
# Substring Anagrams

- Language: typescript
- Original path: `typescript/08102026-substring-anagrams/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given two strings, `s` and `t`, both consisting of lowercase English letters, return the number of substrings in `s` that are anagrams of `t`.

An anagram is formed by rearranging all the letters of another string, using every original letter exactly once.

## Example

```text
Input: s = "caabab", t = "aba"
Output: 2
```

Explanation: The substrings starting at indices `1` and `2` are `"aab"` and `"aba"`. Both are anagrams of `t`.

# Constraints

- `s` and `t` contain only lowercase English letters.
- `s` and `t` are non-empty.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `s` and `t` are already anagrams of each other.
- Matching substrings overlap.
- `t` contains repeated letters.
- `t` is longer than `s`.
- No substring of `s` is an anagram of `t`.

