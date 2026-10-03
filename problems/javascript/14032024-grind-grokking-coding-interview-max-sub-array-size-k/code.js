/**
 * Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
 */

export default function maxSumSubArrayOfSizeK(arr, k) {
  if (!Number.isInteger(k) || k < 1 || k > arr.length) return 0;

  let start = 0;
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    if (end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[start];
      start += 1;
    }
  }

  return maxSum;
}
