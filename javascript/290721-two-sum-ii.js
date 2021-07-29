/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  const ans = []

  let rest
  numbers.some(function (num, index) {
    rest = target - num

    if (numbers.slice(index + 1).includes(rest)) {
      ans.push(index + 1)
      ans.push(numbers.slice(index + 1).indexOf(rest) + index + 2)

      return true
    }
  })

  return ans
}
