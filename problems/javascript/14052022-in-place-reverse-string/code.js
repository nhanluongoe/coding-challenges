/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function reverse(arrayOfChars) {
  for (let i = 0; i < ~~arrayOfChars.length / 2; i++) {
    [arrayOfChars[i], arrayOfChars[arrayOfChars.length - 1 - i]] = [
      arrayOfChars[arrayOfChars.length - 1 - i],
      arrayOfChars[i],
    ]
  }
}

// Tests

let desc = 'empty string'
let input = ''.split('')
reverse(input)
let actual = input.join('')
let expected = ''
assertEqual(actual, expected, desc)

desc = 'single character string'
input = 'A'.split('')
reverse(input)
actual = input.join('')
expected = 'A'
assertEqual(actual, expected, desc)

desc = 'longer string'
input = 'ABCDE'.split('')
reverse(input)
actual = input.join('')
expected = 'EDCBA'
assertEqual(actual, expected, desc)

function assertEqual(a, b, assertDesc) {
  if (a === b) {
    console.log(`${assertDesc} ... PASS`)
  } else {
    console.log(`${assertDesc} ... FAIL: ${a} != ${b}`)
  }
}
