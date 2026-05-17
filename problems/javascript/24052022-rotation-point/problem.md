---
solvedAt: "2022-05-24"
---
# Rotation Point

- Language: javascript
- Original path: `javascript/240522-rotation-point.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a sorted array that has been rotated, find the index where the rotation starts.

# Solutions

Binary-search against the first element to locate the first item that belongs to the lower sorted half.

# Edge cases

- Array rotated by one position.
- Array with two elements.
- Already sorted input, if allowed.
