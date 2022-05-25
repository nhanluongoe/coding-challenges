package main

import (
	"fmt"
	"sort"
)

/*
* constraint:
* 1. The integers are in range 1..n
* 2. The length of the slice is n + 1
* 3. Don't mutate the input
 */

func main() {
	slice := []int{4, 1, 4, 8, 3, 2, 7, 6, 5}

	result1 := findRepeat(slice)
	fmt.Println(result1)

	result2 := findRepeat2(slice)
	fmt.Println(result2)
}

func findRepeat(numbers []int) int {
	floor := 1
	ceiling := len(numbers) - 1

	for floor < ceiling {
		midPoint := floor + (ceiling-floor)/2
		lowerRangeFloor := floor
		lowerRangeCeiling := midPoint
		upperRangeFloor := midPoint + 1
		upperRangeCeiling := ceiling

		distinctPosiibleIntegersInLowerRange := lowerRangeCeiling - lowerRangeFloor + 1

		integersInLowerRange := 0
		for i := 0; i < len(numbers); i++ {
			if numbers[i] >= lowerRangeFloor && numbers[i] <= lowerRangeCeiling {
				integersInLowerRange += 1
			}
		}

		if integersInLowerRange > distinctPosiibleIntegersInLowerRange {
			floor = lowerRangeFloor
			ceiling = lowerRangeCeiling
		} else {
			floor = upperRangeFloor
			ceiling = upperRangeCeiling
		}
	}

	return floor
}

// Time complexity: O(nlogn)
// Space complexity: O(n)
func findRepeat2(slice []int) int {
	coppiedSlice := make([]int, len(slice))
	copy(coppiedSlice, slice)
	sort.Ints(coppiedSlice)

	for i := 0; i < len(coppiedSlice)-1; i++ {
		if coppiedSlice[i] == coppiedSlice[i+1] {
			return coppiedSlice[i]

		}
	}

	panic("Input slice violates constraint")
}
