/**
 * https://leetcode.com/problems/plus-one/
 */

const plusOne = (digits) => {
  const result = [...digits]
  for (let index = result.length - 1; index >= 0; index--) {
    if (result[index] < 9) {
      result[index]++
      return result
    }
    result[index] = 0
  }
  return [1, ...result]
}

export default plusOne
