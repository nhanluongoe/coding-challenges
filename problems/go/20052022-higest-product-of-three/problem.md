---
solvedAt: "2022-05-20"
---
# Highest Product of Three

- Language: go
- Original path: `go/200522-higest-product-of-three.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Given integers, find the maximum product obtainable from any three numbers.

## Examples

- `[1, 2, 3]` -> `6`.
- `[-10, -10, 1, 3, 2]` -> `300`.
- `[0, 0, 2, 3]` -> `0`.

# Solutions

Track the largest and smallest values/products while scanning, because two negative numbers can produce the best positive product.

# Edge cases

- Negative numbers.
- Zeros.
- Exactly three values.
