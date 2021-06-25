/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found
 * If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 */

const searchInsert = (nums, target) => {
  for (let idx = 0; idx < nums.length; idx++) {
    if (target <= nums[idx]) return idx;
  }

  return nums.length
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0))