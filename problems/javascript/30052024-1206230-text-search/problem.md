---
solvedAt: "2024-05-30"
---
# Text Search

- Language: javascript
- Original path: `javascript/1206230-text-search.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Search text records and return entries that match the requested query.

## Examples

- Query `"react"` -> records containing `react` after normalization.
- Query with different case, such as `"React"`, should match the same normalized records.
- No matching text -> `[]`.

# Solutions

Normalize searchable text and query terms, then filter records that satisfy the match rule.

# Edge cases

- Empty query.
- Case differences.
- No matching records.
