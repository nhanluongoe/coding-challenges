export default function twoSum(nums: number[], target: number): number[] {
  const visitedNumbers = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const remainingIndex = visitedNumbers.get(target - nums[index]);
    if (remainingIndex !== undefined) return [remainingIndex, index];

    visitedNumbers.set(nums[index], index);
  }

  return [];
}
