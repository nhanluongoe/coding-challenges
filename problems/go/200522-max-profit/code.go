package main

import (
	"fmt"
	"math"
)

func getMaxProfit(stockPrices []int) int {
	minPrice := stockPrices[0]
	maxProfit := stockPrices[1] - stockPrices[0]

	for i := 1; i < len(stockPrices); i++ {
		currentPrice := stockPrices[i]
		potentialProfit := currentPrice - minPrice
		maxProfit = int(math.Max(float64(maxProfit), float64(potentialProfit)))
		minPrice = int(math.Min(float64(minPrice), float64(currentPrice)))
	}

	return maxProfit
}

func main() {
	stockPrices := []int{1, 5, 3, 2}
	case1 := getMaxProfit(stockPrices)
	fmt.Println(case1)

	stockPrices = []int{7, 2, 8, 9}
	case2 := getMaxProfit((stockPrices))
	fmt.Println(case2)
}
