// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
  A.sort((a, b) => a - b);

  const n = A.length;

  return Math.max(A[n - 3] * A[n - 2] * A[n - 1], A[0] * A[1] * A[n - 1]);
}
