/**
 * Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 */

function maxSumSubArrayOfSizeK(arr, k) {
  let start = 0;
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    maxSum = Math.max(maxSum, windowSum);
    if (end >= k - 1) {
      windowSum -= arr[start];
      start += 1;
    }
  }

  return maxSum;
}

const array = [2, 1, 3, 5, 7, 1, -8, 2, 5];
const k = 3;

console.log(maxSumSubArrayOfSizeK(array, k));
console.log(maxSumSubArrayOfSizeK([2, 1, 5, 1, 3, 2], 3));
