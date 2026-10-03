export default function findRotationPoint(words) {
  if (words.length < 2 || words[0] <= words[words.length - 1]) return 0

  // Find the rotation point in the vector
  let floorIndex = 0
  let ceilingIndex = words.length - 1

  while (floorIndex < ceilingIndex) {
    const halfDistance = Math.floor((ceilingIndex - floorIndex) / 2)
    const guessIndex = floorIndex + halfDistance

    if (words[guessIndex] < words[0]) {
      ceilingIndex = guessIndex
    } else {
      floorIndex = guessIndex
    }

    if (floorIndex + 1 === ceilingIndex) break
  }

  return ceilingIndex
}
