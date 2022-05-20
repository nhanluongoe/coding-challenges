package main

import (
	"fmt"
	"math"
)

func main() {
	result1 := getHighestProductOf3([]int{1, 2, 3, 4})
	fmt.Println(result1)

	result2 := getHighestProductOf3([]int{6, 1, 3, 5, 7, 8, 2})
	fmt.Println(result2)

	result3 := getHighestProductOf3([]int{-10, 1, 3, 2, -10})
	fmt.Println(result3)

}

func getHighestProductOf3(arrayOfInts []int) int {
	highestProductOf3 := arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2]
	highestProductOf2 := arrayOfInts[0] * arrayOfInts[1]
	lowestProductOf2 := arrayOfInts[0] * arrayOfInts[1]
	highest := int(math.Max(float64(arrayOfInts[0]), float64(arrayOfInts[1])))
	lowest := int(math.Min(float64(arrayOfInts[0]), float64(arrayOfInts[1])))

	for i := 2; i < len(arrayOfInts); i++ {
		current := arrayOfInts[i]
		highestProductOf3 = max([]int{highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current})

		highestProductOf2 = max([]int{highestProductOf2, highest * current, lowest * current})
		lowestProductOf2 = min([]int{lowestProductOf2, highest * current, lowest * current})

		highest = max([]int{highest, current})
		lowest = min([]int{lowest, current})

	}

	return highestProductOf3
}

func min(arrayOfInts []int) int {
	min := arrayOfInts[0]
	for _, value := range arrayOfInts {
		if value < min {
			min = value
		}
	}
	return min
}

func max(arrayOfInts []int) int {
	max := arrayOfInts[0]
	for _, value := range arrayOfInts {
		if value > max {
			max = value
		}
	}
	return max
}
