---
solvedAt: "2021-07-12"
---
# Best Time to Buy and Sell

- Language: ruby
- Original path: `ruby/120721-best-time-to-buy-and-sell.rb`
- Source: Algorithm practice
- Solution: `code.rb`

# Problems

Given daily prices, compute the best profit from buying before selling under the variant's transaction rule.

# Solutions

Scan once, keeping the lowest earlier price and the best sell profit seen so far.

# Edge cases

- Prices always decrease.
- Only one or no price.
- Repeated equal prices.
