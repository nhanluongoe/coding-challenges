---
solvedAt: "2022-05-21"
---
# Product of Other Numbers

- Language: go
- Original path: `go/210522-product-of-other-numbers.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

For each index, return the product of all numbers in the input except the number at that index.

## Examples

- `[1, 2, 3]` -> `[6, 3, 2]`.
- `[1, 0, 3]` -> `[0, 3, 0]`.
- `[0, 0, 3]` -> `[0, 0, 0]`.

# Solutions

Build prefix products from the left and suffix products from the right, multiplying them without using division.

# Edge cases

- One or more zeros.
- Negative numbers.
- Arrays with fewer than two numbers.
