---
solvedAt: "2024-03-29"
---
# Bracket Validator

- Language: java
- Original path: `java/BracketValidator.java`
- Source: Algorithm practice
- Solution: `BracketValidator.java`

# Problems

Given a string containing brackets, determine whether every opening bracket is closed by the correct type of bracket in the correct order. The supported bracket pairs are typically `()`, `[]`, and `{}`. A valid string may contain nested or adjacent bracket groups. Return `false` for mismatched, extra closing, or unclosed opening brackets.

## Examples

- `"([]{[]})[]{{}()}"` -> `true`.
- `"()"` -> `true`.
- `"([)]"` -> `false`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
