export default function pairSum(nums: number[], target: number): number[] {
  const visitedNumbers = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const remaining = target - currentNumber;
    const remainingIndex = visitedNumbers.get(remaining);
    if (remainingIndex != null) return [remainingIndex, i];
    visitedNumbers.set(currentNumber, i);
  }

  return [];
}
