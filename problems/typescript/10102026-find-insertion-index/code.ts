export default function findInsertionIndex(
  nums: number[],
  target: number,
): number {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}

// note 1: the problem can be translated into finding the first value that's equal or greater than the target
// so we can get a one universal condition and apply binary search
