package main

import (
	"fmt"
)

func main() {
	const highestPossibleScore = 100
	scores := []int{37, 89, 41, 65, 91, 53}
	sortedScores := sortScores(scores, highestPossibleScore)
	fmt.Println(sortedScores)
}

// Constraints: Must sort in O(n) time
// Time complexity: O(n)
// Space complexity: O(n)
func sortScores(unorderedScores []int, highestPossibleScore int) []int {
	scoreCounts := make([]int, highestPossibleScore+1)

	for i := 0; i < len(unorderedScores); i++ {
		score := unorderedScores[i]
		scoreCounts[score] += 1
	}

	orderedScores := []int{}

	for score := highestPossibleScore; score >= 0; score-- {
		count := scoreCounts[score]

		for time := 0; time < count; time++ {
			orderedScores = append(orderedScores, score)
		}
	}

	return orderedScores
}
