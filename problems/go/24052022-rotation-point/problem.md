---
solvedAt: "2022-05-24"
---
# Rotation Point

- Language: go
- Original path: `go/240522-rotation-point.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Given a sorted array that has been rotated, find the index where the rotation starts.

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
