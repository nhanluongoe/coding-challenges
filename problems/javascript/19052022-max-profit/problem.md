---
solvedAt: "2022-05-19"
---
# Max Profit

- Language: javascript
- Original path: `javascript/190522-max-profit.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given daily prices, compute the best profit from buying before selling under the variant's transaction rule.

## Examples

- `[1, 5, 3, 6]` -> best single profit `5`.
- `[7, 6, 4]` -> `0` or the least loss, depending on the variant.
- `[5]` -> no profitable transaction.

# Solutions

Scan once, keeping the lowest earlier price and the best sell profit seen so far.

# Edge cases

- Prices always decrease.
- Only one or no price.
- Repeated equal prices.
