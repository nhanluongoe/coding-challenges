---
solvedAt: "2023-06-16"
---
# Data Selection

- Language: javascript
- Original path: `javascript/160623-data-selection.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given session-like records and selection options, filter, group, and summarize the data according to those options. The function should ignore records that do not match the requested criteria, preserve useful fields for selected sessions, and compute any requested aggregates. Missing optional fields should be handled defensively.

## Examples

- Filter with no matching sessions -> empty result.
- Sessions in the same group -> combined under that group.
- Missing optional fields -> handled without crashing.

# Solutions

Filter sessions by the requested criteria, group them when needed, and compute derived totals from the matching records.

# Edge cases

- No matching sessions.
- Missing optional fields.
- Multiple sessions in the same group.
