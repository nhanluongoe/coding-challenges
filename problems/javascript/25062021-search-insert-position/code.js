/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) left = middle + 1;
    else right = middle;
  }

  return left;
};

export default searchInsert;
