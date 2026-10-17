---
solvedAt: "2026-10-17"
---
# Valid Parenthesis Expression

- Language: typescript
- Original path: `typescript/17102026-valid-parenthesis-expression/code.ts`
- Source: Algorithm practice
- Solution: `code.ts`

# Problems

Given a string `s` representing an expression containing only the characters `(`, `)`, `[`, `]`, `{`, and `}`, determine whether it forms a valid sequence of parentheses.

An expression is valid when:

- Every opening bracket has a closing bracket of the same type.
- Brackets are closed in the correct nested order.
- No closing bracket appears before its matching opening bracket.

## Example 1

```text
Input: s = "([]{})"
Output: true
```

## Example 2

```text
Input: s = "([]{)}"
Output: false
```

Explanation: The `(` bracket is closed before its nested `{` bracket is closed.

# Constraints

- `s` contains only `(`, `)`, `[`, `]`, `{`, and `}`.
- `s` may be empty.

# Solutions

Implement your solution in `code.ts`.

# Edge cases

- `s` is empty.
- Bracket pairs are adjacent rather than nested.
- Several bracket types are deeply nested.
- A closing bracket appears before an opening bracket.
- An opening bracket is never closed.
- A bracket is closed by the wrong type.

