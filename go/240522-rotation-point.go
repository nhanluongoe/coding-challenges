package main

import (
	"fmt"
)

func main() {
	words1 := []string{"grape", "orange", "plum", "radish", "apple"}
	fmt.Println("Rotation point: ", findRotationPoint(words1))

	words2 := []string{"cape", "cake"}
	fmt.Println("Rotation point: ", findRotationPoint(words2))
}

func findRotationPoint(words []string) int {
	floorIndex := 0
	ceilingIndex := len(words) - 1

	for floorIndex < ceilingIndex {
		guessIndex := floorIndex + (ceilingIndex-floorIndex)/2

		if words[guessIndex] < words[0] {
			ceilingIndex = guessIndex
		} else {
			floorIndex = guessIndex
		}

		if floorIndex+1 == ceilingIndex {
			break
		}
	}

	return ceilingIndex
}
