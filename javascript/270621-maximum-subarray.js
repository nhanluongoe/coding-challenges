/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * O(n)
 */

const maxSubArray = (nums) => {
  let max = nums[0]
  let sum = 0

  nums.forEach((num, idx) => {
    sum = Math.max(num, sum + num)
    max = Math.max(sum, max)
  })

  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
