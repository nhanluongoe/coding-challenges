/**
 * Constraints: must sort in O(n) time
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function sortScores(unorderedScores, highestPossibleScore) {
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0)

  unorderedScores.forEach((score) => {
    scoreCounts[score] += 1
  })

  const orderedScores = []

  // higestPossibleScore is constant, so that this is not O(n^2)
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score]

    for (let time = 0; time < count; time++) {
      orderedScores.push(score)
    }
  }

  return orderedScores
}

// Tests

let desc = 'no scores'
let actual = sortScores([], 100)
let expected = []
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc)

desc = 'one score'
actual = sortScores([55], 100)
expected = [55]
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc)

desc = 'two scores'
actual = sortScores([30, 60], 100)
expected = [60, 30]
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc)

desc = 'many scores'
actual = sortScores([37, 89, 41, 65, 91, 53], 100)
expected = [91, 89, 65, 53, 41, 37]
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc)

desc = 'repeated scores'
actual = sortScores([20, 10, 30, 30, 10, 20], 100)
expected = [30, 30, 20, 20, 10, 10]
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
