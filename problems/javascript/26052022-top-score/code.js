/** Counting sort in O(n + highestPossibleScore) time. */
export default function sortScores(unorderedScores, highestPossibleScore) {
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  unorderedScores.forEach((score) => scoreCounts[score]++);

  const orderedScores = [];
  for (let score = highestPossibleScore; score >= 0; score--) {
    for (let count = 0; count < scoreCounts[score]; count++) {
      orderedScores.push(score);
    }
  }
  return orderedScores;
}
