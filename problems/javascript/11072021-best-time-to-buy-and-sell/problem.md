---
solvedAt: "2021-07-11"
---
# Best Time to Buy and Sell

- Language: javascript
- Original path: `javascript/110721-best-time-to-buy-and-sell.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given a sequence of stock prices over time, compute the best profit allowed by the problem variant. For the single-transaction version, choose one buy time and one later sell time so profit is maximized. For the multiple-transaction version, capture every profitable rise while still respecting chronological order. The algorithm must not sell before buying and should define what to return when no profitable trade exists.

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
