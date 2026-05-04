package main

import (
	"fmt"
)

func main() {
	fmt.Println(getProductsOfAllIntsExceptAtIndex([]int{8, 2, 4, 3, 1, 5}))

}

func getProductsOfAllIntsExceptAtIndex(arrayInt []int) []int {
	if len(arrayInt) < 2 {
		panic("Require at least two elements")
	}

	result := make([]int, len(arrayInt))

	productSoFar := 1
	for i := 0; i < len(arrayInt); i++ {
		result[i] = productSoFar
		productSoFar *= arrayInt[i]
	}

	productSoFar = 1
	for i := len(arrayInt) - 1; i >= 0; i-- {
		result[i] *= productSoFar
		productSoFar *= arrayInt[i]
	}

	return result
}
