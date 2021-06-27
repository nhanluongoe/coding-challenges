/**
 * https://leetcode.com/problems/maximum-subarray/
 * 
 * O(n)
 */

const maxSubArray = (nums) => {
  let max = -Number("Infinity");
  let sum;

  nums.forEach((num, idx) => {
    if (idx === 0) sum = num;
    else {
      if (sum + num < num) sum = num;
      else sum = sum + num;
    }

    max = Math.max(max, sum);
  });

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
