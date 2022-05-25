/**
 * Time complexity: O(nlogn)
 * Space complexity: O(n)
 */
function findRepeat(numbers) {
  const sortedNumbers = numbers.slice().sort()

  for (let i = 0; i < numbers.length - 1; i++) {
    if (sortedNumbers[i] === sortedNumbers[i + 1]) return sortedNumbers[i]
  }

  return 0
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
