/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const lookupMovies = new Map(
    movieLengths.map((movieLength, idx) => [movieLength, idx])
  )

  let result = false
  movieLengths.forEach((movieLength, idx) => {
    const remain = flightLength - movieLength
    if (
      lookupMovies.get(remain) !== undefined &&
      lookupMovies.get(remain) !== idx
    )
      result = true
  })

  return result
}

// Tests

let desc = 'short flight'
let actual = canTwoMoviesFillFlight([2, 4], 1)
let expected = false
assertEquals(actual, expected, desc)

desc = 'long flight'
actual = canTwoMoviesFillFlight([2, 4], 6)
expected = true
assertEquals(actual, expected, desc)

desc = 'one movie half flight length'
actual = canTwoMoviesFillFlight([3, 8], 6)
expected = false
assertEquals(actual, expected, desc)

desc = 'two movies half flight length'
actual = canTwoMoviesFillFlight([3, 8, 3], 6)
expected = true
assertEquals(actual, expected, desc)

desc = 'lots of possible pairs'
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7)
expected = true
assertEquals(actual, expected, desc)

desc = 'not using first movie'
actual = canTwoMoviesFillFlight([4, 3, 2], 5)
expected = true
assertEquals(actual, expected, desc)

desc = 'multiple movies shorter than flight'
actual = canTwoMoviesFillFlight([5, 6, 7, 8], 9)
expected = false
assertEquals(actual, expected, desc)

desc = 'only one movie'
actual = canTwoMoviesFillFlight([6], 6)
expected = false
assertEquals(actual, expected, desc)

desc = 'no movies'
actual = canTwoMoviesFillFlight([], 2)
expected = false
assertEquals(actual, expected, desc)

function assertEquals(a, b, _desc) {
  if (a === b) {
    console.log(`${_desc} ... PASS`)
  } else {
    console.log(`${_desc} ... FAIL: ${a} != ${b}`)
  }
}
