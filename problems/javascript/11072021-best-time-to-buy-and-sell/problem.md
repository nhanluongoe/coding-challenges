---
solvedAt: "2021-07-11"
---
# Best Time to Buy and Sell

- Language: javascript
- Original path: `javascript/110721-best-time-to-buy-and-sell.js`
- Source: Algorithm practice
- Solution: `code.js`

# Problems

Given daily prices, compute the best profit from buying before selling under the variant's transaction rule.

# Solutions

Scan once, keeping the lowest earlier price and the best sell profit seen so far.

# Edge cases

- Prices always decrease.
- Only one or no price.
- Repeated equal prices.
