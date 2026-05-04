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

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([2, 4, 1]))
