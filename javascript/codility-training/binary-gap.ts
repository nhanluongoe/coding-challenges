// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number): number {
  // Implement your solution here
  const binaryN = N.toString(2);

  let maxGap = 0;
  let oneIndex = 0;

  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === '1') {
      maxGap = Math.max(maxGap, i - oneIndex - 1);
      oneIndex = i;
    }
  }

  return maxGap;
}
