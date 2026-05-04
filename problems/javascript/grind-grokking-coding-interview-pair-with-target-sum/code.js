/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 * Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 */

function pairWithTargetSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pairSum = arr[left] + arr[right];
    if (pairSum > target) {
      right -= 1;
    } else if (pairSum < target) {
      left += 1;
    } else {
      return [left, right];
    }
  }

  return 0; // the pair doesn't exist
}

console.log(pairWithTargetSum([2, 5, 9, 11], 11));
console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
