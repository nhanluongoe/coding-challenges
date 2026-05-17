---
solvedAt: "2024-05-22"
---
# Group By

- Language: javascript
- Original path: `javascript/220524-group-by.js`
- Source: JavaScript utility
- Solution: `code.js`

# Problems

Given an array and an iteratee, organize items by the key produced for each item. For `countBy`, store how many items map to each key. For `groupBy`, store the original items under their computed key. The iteratee may be a function or shorthand depending on the implementation. Return an object-like mapping from keys to counts or grouped arrays.

## Examples

- `countBy([6.1, 4.2, 6.3], Math.floor)` -> `{ 4: 1, 6: 2 }`.
- `groupBy(["one", "two"], "length")`-style variants group both under length `3`.
- Empty input -> `{}`.

# Solutions

Evaluate the iteratee for each item and store either a count or an array of items under that computed key.

# Edge cases

- Empty input.
- Keys produced as numbers or strings.
- Items mapping to the same key.
