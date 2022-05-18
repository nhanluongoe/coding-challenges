/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function hasPalindromePermutation(theString) {
  const characterCount = {}

  for (const c of theString) {
    if (!characterCount[c]) characterCount[c] = 1
    else characterCount[c] += 1
  }

  let numOfOddOccurrences = 0
  for (const [_, occurrences] of Object.entries(characterCount)) {
    if (occurrences % 2 === 1) numOfOddOccurrences += 1
  }

  if (numOfOddOccurrences > 1) return false
  return true
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function hasPalindromePermutation2(theString) {
  const unpairedChars = new Set()

  for (const c of theString) {
    if (unpairedChars.has(c)) unpairedChars.delete(c)
    else unpairedChars.add(c)
  }

  return unpairedChars.size <= 1
}

// Tests

let desc = 'permutation with odd number of chars'
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc)

desc = 'permutation with even number of chars'
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc)

desc = 'no permutation with odd number of chars'
assertEqual(hasPalindromePermutation('aabcd'), false, desc)

desc = 'no permutation with even number of chars'
assertEqual(hasPalindromePermutation('aabbcd'), false, desc)

desc = 'empty string'
assertEqual(hasPalindromePermutation(''), true, desc)

desc = 'one character string '
assertEqual(hasPalindromePermutation('a'), true, desc)

function assertEqual(a, b, _desc) {
  if (a === b) {
    console.log(`${_desc} ... PASS`)
  } else {
    console.log(`${_desc} ... FAIL: ${a} != ${b}`)
  }
}
