---
solvedAt: "2022-05-23"
---
# In Place Shuffle

- Language: go
- Original path: `go/230522-in-place-shuffle.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Randomly shuffle an array in place so every permutation is equally likely.

# Solutions

Use the Fisher-Yates algorithm: for each position, swap it with a uniformly random position from the remaining range.

# Edge cases

- Empty or one-element array.
- Repeated values.
- Random index bounds must include both endpoints correctly.
