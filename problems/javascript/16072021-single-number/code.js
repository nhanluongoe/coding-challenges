Array.prototype.count = function (val) {
  return this.filter((elem) => elem === val).length
}

/**
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums.count(nums[i]) === 1) return nums[i]
  }
}

/**
 * Better solution using XOR trick
 * x ^ x = 0
 * x ^ 0 = x
 */

const singleNumberBetter = (nums) => {
  return nums.reduce((memo, value) => memo ^ value)
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumberBetter([2, 2, 1]))
console.log(singleNumberBetter([4, 1, 2, 1, 2]))
