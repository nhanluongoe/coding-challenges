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
	slice1 := []int{4, 1, 4, 8, 3, 2, 7, 6, 5}
	result1 := findRepeat(slice1)
	fmt.Println(result1)

}

// Time complexity: O(nlogn)
// Space complexity: O(n)
func findRepeat(slice []int) int {
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
