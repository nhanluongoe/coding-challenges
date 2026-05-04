/**
 * Note that:
 * 1. The integers are in the range 1..n
 * 2. The length of array is n + 1
 */

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */
function findRepeat2(numbers) {
  const sortedNumbers = numbers.slice().sort()

  for (let i = 0; i < numbers.length - 1; i++) {
    if (sortedNumbers[i] === sortedNumbers[i + 1]) return sortedNumbers[i]
  }

  return 0
}

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */
function findRepeat(numbers) {
  let floor = 1
  let ceiling = numbers.length - 1

  while (floor < ceiling) {
    const midPoint = floor + Math.floor((ceiling - floor) / 2)
    const lowerRangeFloor = floor
    const lowerRangeCeiling = midPoint
    const upperRangeFloor = midPoint + 1
    const upperRangeCeiling = ceiling

    const distinctPossibleIntegersInLowerRange =
      lowerRangeCeiling - lowerRangeFloor + 1

    let integersInLowerRange = 0
    for (const number of numbers) {
      if (number <= lowerRangeCeiling && number >= lowerRangeFloor)
        integersInLowerRange += 1
    }

    if (integersInLowerRange > distinctPossibleIntegersInLowerRange) {
      floor = lowerRangeFloor
      ceiling = lowerRangeCeiling
    } else {
      floor = upperRangeFloor
      ceiling = upperRangeCeiling
    }
  }

  return floor
}

// Tests

let desc = 'just the repeated number'
let actual = findRepeat([1, 1])
let expected = 1
assertEqual(actual, expected, desc)

desc = 'short array'
actual = findRepeat([1, 2, 3, 2])
expected = 2
assertEqual(actual, expected, desc)

desc = 'medium array'
actual = findRepeat([1, 2, 5, 5, 5, 5])
expected = 5
assertEqual(actual, expected, desc)

desc = 'long array'
actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5])
expected = 4
assertEqual(actual, expected, desc)

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`)
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
