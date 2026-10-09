---
solvedAt: "2026-10-09"
---
# Longest Uniform Substring After Replacements

- Language: typescript
- Original path: `typescript/09102026-longest-uniform-substring-after-replacements/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

A uniform substring is one in which all characters are identical.

Given a string `s` and a non-negative integer `k`, determine the length of the longest uniform substring that can be formed by replacing at most `k` characters.

## Example

```text
Input: s = "aabcdcca", k = 2
Output: 5
```

Explanation: The substring `"bcdcc"` can become `"ccccc"` by replacing `b` and `d` with `c`.

# Constraints

- `k` is a non-negative integer.
- `s` may be empty.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `s` is empty.
- `s` contains one character.
- No replacements are allowed.
- The entire string is already uniform.
- `k` is large enough to make the entire string uniform.

