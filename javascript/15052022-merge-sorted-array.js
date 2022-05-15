/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function mergeArrays(myArray, alicesArray) {
  const result = []
  let [i, j] = [0, 0]

  while (myArray[i] && alicesArray[j]) {
    if (myArray[i] > alicesArray[j]) {
      result.push(alicesArray[j])
      j++
    } else {
      result.push(myArray[i])
      i++
    }
  }

  if (myArray[i])
    for (let _i = i; _i < myArray.length; _i++) result.push(myArray[_i])
  if (alicesArray[j])
    for (let _i = j; _i < alicesArray.length; _i++) result.push(alicesArray[_i])

  return result
}

/**
 * Time complexity: O(logn)
 * Space complexity: O(n)
 */
function mergeArrays2(myArray, alicesArray) {
  const result = myArray.concat(alicesArray)
  result.sort((a, b) => a - b)
  return result
}

// Tests

let desc = 'both arrays are empty'
let actual = mergeArrays([], [])
let actual2 = mergeArrays2([], [])
let expected = []
assertDeepEqual(actual, expected, desc)
assertDeepEqual(actual2, expected, desc)

desc = 'first array is empty'
actual = mergeArrays([], [1, 2, 3])
actual2 = mergeArrays2([], [1, 2, 3])
expected = [1, 2, 3]
assertDeepEqual(actual, expected, desc)
assertDeepEqual(actual2, expected, desc)

desc = 'second array is empty'
actual = mergeArrays([5, 6, 7], [])
actual2 = mergeArrays([5, 6, 7], [])
expected = [5, 6, 7]
assertDeepEqual(actual, expected, desc)
assertDeepEqual(actual2, expected, desc)

desc = 'both arrays have some numbers'
actual = mergeArrays([2, 4, 6], [1, 3, 7])
actual2 = mergeArrays([2, 4, 6], [1, 3, 7])
expected = [1, 2, 3, 4, 6, 7]
assertDeepEqual(actual, expected, desc)
assertDeepEqual(actual2, expected, desc)

desc = 'arrays are different lengths'
actual = mergeArrays([2, 4, 6, 8], [1, 7])
actual2 = mergeArrays([2, 4, 6, 8], [1, 7])
expected = [1, 2, 4, 6, 7, 8]
assertDeepEqual(actual, expected, desc)
assertDeepEqual(actual2, expected, desc)

function assertDeepEqual(a, b, testDesc) {
  const aStr = JSON.stringify(a)
  const bStr = JSON.stringify(b)
  if (aStr !== bStr) {
    console.log(`${testDesc} ... FAIL: ${aStr} != ${bStr}`)
  } else {
    console.log(`${testDesc} ... PASS`)
  }
}
