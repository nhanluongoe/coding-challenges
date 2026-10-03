/**
 * Note that:
 * 1. The integers are in the range 1..n
 * 2. The length of array is n + 1
 */

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */
export function findRepeat2(numbers) {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b)

  for (let i = 0; i < numbers.length - 1; i++) {
    if (sortedNumbers[i] === sortedNumbers[i + 1]) return sortedNumbers[i]
  }

  return 0
}

/**
 * Time complexity: O(nlogn)
 * Space complexity: O(1)
 */
export default function findRepeat(numbers) {
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
