---
solvedAt: "2023-06-11"
---
# List Format

- Language: javascript
- Original path: `javascript/110623-list-format.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a list of names or labels, format them into a human-readable phrase. The function should join two items with `and`, join longer lists with commas and a final `and`, and support options such as sorting, limiting the visible item count, and removing duplicates. Empty or missing inputs should produce an empty string.

## Examples

- `listFormat([])` -> `""`.
- `listFormat(["Bob", "Alice"])` -> `"Bob and Alice"`.
- `listFormat(["Bob", "Ben", "Tim", "Jane", "John"], { length: 3 })` -> `"Bob, Ben, Tim and 2 others"`.

# Solutions

Follow the current implementation strategy, keeping the public function or class API intact and favoring a clear linear, logarithmic, or dynamic-programming approach as appropriate.

# Edge cases

- Empty or minimal input.
- Duplicate or repeated values.
- Boundary values at the start or end of the structure.
