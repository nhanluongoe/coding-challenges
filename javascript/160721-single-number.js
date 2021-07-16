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

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
