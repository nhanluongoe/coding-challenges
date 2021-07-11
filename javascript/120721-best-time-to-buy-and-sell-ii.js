/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let profit = 0

  for (let i = 0; i < prices.length - 1; i += 1) {
    if (prices[i + 1] > prices[i]) {
      profit += prices[i + 1] - prices[i]
    }
  }

  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
