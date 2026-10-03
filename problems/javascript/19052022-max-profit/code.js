export default function getMaxProfit(stockPrices) {
  if (stockPrices.length < 2) {
    throw new Error("Require at least 2 days to get profit");
  }

  let maxProfit = stockPrices[1] - stockPrices[0];
  let minPrice = stockPrices[0];
  for (let index = 1; index < stockPrices.length; index++) {
    const currentPrice = stockPrices[index];
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    minPrice = Math.min(currentPrice, minPrice);
  }

  return maxProfit;
}
