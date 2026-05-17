---
solvedAt: "2022-05-24"
---
# Rotation Point

- Language: javascript
- Original path: `javascript/240522-rotation-point.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given an alphabetically sorted array that has been rotated, find the index where the rotation begins, which is the smallest element in the array. The array consists of two sorted portions joined at the rotation point. Use comparisons to narrow the search rather than scanning every word. The behavior for an already sorted array should be explicit, commonly returning index `0`.

## Examples

- `["cape", "cake"]` -> index `1`.
- `["ptolemaic", "retrograde", "supplant", "undulate", "xenoepist", "asymptote"]` -> index `5`.
- Already sorted input -> index `0`, if that case is supported.

# Solutions

Binary-search against the first element to locate the first item that belongs to the lower sorted half.

# Edge cases

- Array rotated by one position.
- Array with two elements.
- Already sorted input, if allowed.
