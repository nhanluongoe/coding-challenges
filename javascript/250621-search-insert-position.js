/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found
 * If not, return the index where it would be if it were inserted in order.
 */

import assert from "assert";

const searchInsert = (nums, target) => {
  for (let idx = 0; idx < nums.length; idx++) {
    if (target <= nums[idx]) return idx;
  }

  return nums.length
};

assert(searchInsert([1, 3, 5, 6], 5) === 2, `should be 2 but got ${searchInsert([1, 3, 5, 6], 5)}`);
assert(searchInsert([1, 3, 5, 6], 2) === 1, `should be 1 but got ${searchInsert([1, 3, 5, 6], 2)}`);
assert(searchInsert([1, 3, 5, 6], 7) === 4, `should be 4 but got ${searchInsert([1, 3, 5, 6], 7)}`);
assert(searchInsert([1, 3, 5, 6], 0) === 0, `should be 0 but got ${searchInsert([1, 3, 5, 6], 0)}`);
assert(searchInsert([1], 0) === 0, `should be 0 but got ${searchInsert([1, 3, 5, 6], 0)}`);
