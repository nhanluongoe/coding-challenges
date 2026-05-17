---
solvedAt: "2024-05-30"
---
# Text Search

- Language: javascript
- Original path: `javascript/1206230-text-search.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a collection of text records and a search query, return the records that match the query according to the implementation's matching rules. Matching usually requires normalizing case and comparing query terms against searchable fields. The result should include only records that satisfy the query and should return an empty list when nothing matches.

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
