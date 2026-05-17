---
solvedAt: "2024-05-01"
---
# Parenthesis Matching

- Language: java
- Original path: `java/ParenthesisMatching.java`
- Source: Algorithm practice
- Solution: `ParenthesisMatching.java`

# Problems

Given a string containing parentheses and the index of an opening parenthesis, find the index of its matching closing parenthesis. Nested parentheses must be counted correctly, so the first closing parenthesis after the opening index is not always the answer. If the opening parenthesis has no matching close, the function should signal an error according to the implementation.

## Examples

- `"((((()))))"`, opening index `2` -> closing index `7`.
- `"()()((()()))"`, opening index `5` -> closing index `10`.
- No matching closing parenthesis -> error.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.
Time complexity: O(n)
Space complexity: O(n)

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
