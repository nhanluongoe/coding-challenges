/**
 * Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
 * Input: [3, 4, 1, 1, 6], S=8
 * Output: 3
 * Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
 */

function smallestSubArrayGivenSum(arr, sum) {
  let start = 0;
  let minLength = Infinity;
  let windowSum = 0;

  for (let end = 0; end < arr.length; end++) {
    windowSum += arr[end];
    while (windowSum >= sum) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum -= arr[start];
      start += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

const arr = [3, 4, 1, 1, 6];
const sum = 8;

console.log(smallestSubArrayGivenSum(arr, sum));
console.log(smallestSubArrayGivenSum([2, 1, 5, 2, 8], 7));

/**
 * 3 4 1 1 6
 * 3 4 1 1
 *   4 1 1 6
 */
