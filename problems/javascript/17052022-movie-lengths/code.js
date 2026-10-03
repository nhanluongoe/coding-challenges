/** Time complexity: O(n), space complexity: O(n). */
export default function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const seenLengths = new Set()

  for (const movieLength of movieLengths) {
    if (seenLengths.has(flightLength - movieLength)) return true
    seenLengths.add(movieLength)
  }

  return false
}

export const canTwoMoviesFillFlight2 = canTwoMoviesFillFlight
