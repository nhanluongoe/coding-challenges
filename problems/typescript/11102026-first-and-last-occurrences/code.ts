export default function findFirstAndLastOccurrences(
  nums: number[],
  target: number,
): [number, number] {
  const firstOccurence = findFirstOccurence(nums, target);
  const lastOccurence = findLastOccurence(nums, target);
  return [firstOccurence, lastOccurence];
}

function findFirstOccurence(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const midpoint = Math.floor((left + right) / 2); // bias to left because lower bound is always at left so infinite loop won't happen
    if (nums[midpoint] < target) left += 1;
    else if (nums[midpoint] > target) right -= 1;
    else right = midpoint;
  }

  return nums[left] === target ? left : -1;
}

function findLastOccurence(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const midpoint = Math.floor((left + right) / 2) + 1; // bias to right to avoid infinite loop
    if (nums[midpoint] < target) left += 1;
    else if (nums[midpoint] > target) right -= 1;
    else left = midpoint; // since left = midpoint here if we didn't bias midpoint to the right there will be like this: target(left) target(right)
  }

  return nums[right] === target ? right : -1;
}
