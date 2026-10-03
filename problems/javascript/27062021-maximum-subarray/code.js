/**
 * https://leetcode.com/problems/maximum-subarray/
 *
 * O(n)
 */

const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;

  let max = nums[0];
  let sum = 0;

  nums.forEach((num, idx) => {
    sum = Math.max(num, sum + num);
    max = Math.max(sum, max);
  });

  return max;
};

export default maxSubArray;
