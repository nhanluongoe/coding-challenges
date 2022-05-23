package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	slice := []int{1, 2, 3, 4, 5}
	fmt.Println("Original slice: ", slice)
	shuffle(&slice)
	fmt.Println("Shuffled slice: ", slice)
}

func shuffle(slice *[]int) {
	for i := 0; i < len(*slice); i++ {
		randomPickIndex := getRandomNumber(i, len(*slice)-1)

		if randomPickIndex != i {
			temp := (*slice)[i]
			(*slice)[i] = (*slice)[randomPickIndex]
			(*slice)[randomPickIndex] = temp
		}
	}
}

func getRandomNumber(floor int, ceiling int) int {
	rand.Seed(time.Now().UnixNano())
	return rand.Intn(ceiling-floor+1) + floor
}
