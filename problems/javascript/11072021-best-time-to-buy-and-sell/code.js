/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  let minPrice = Infinity
  let maxDiff = 0

  for (let i = 0; i < prices.length; i += 1) {
    maxDiff = Math.max(maxDiff, prices[i] - minPrice)
    minPrice = Math.min(minPrice, prices[i])
  }

  return maxDiff
}

export default maxProfit
