---
solvedAt: "2022-05-20"
---
# Max Profit

- Language: go
- Original path: `go/200522-max-profit.go`
- Source: Algorithm practice
- Solution: `code.go`

# Problems

Given daily prices, compute the best profit from buying before selling under the variant's transaction rule.

# Solutions

Scan once, keeping the lowest earlier price and the best sell profit seen so far.

# Edge cases

- Prices always decrease.
- Only one or no price.
- Repeated equal prices.
