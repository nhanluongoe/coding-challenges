function twoSum(nums: number[], target: number): number[] {
  const mappedNums = new Map(nums.map((num, idx) => [num, idx]));
  let res: number[];

  nums.forEach((num, idx) => {
    const remain = target - num;
    const remainIdx = mappedNums.get(remain)
    if (remainIdx !== undefined && remainIdx !== idx)
      res = [idx, mappedNums.get(remain)];
  });

  return res;
}
