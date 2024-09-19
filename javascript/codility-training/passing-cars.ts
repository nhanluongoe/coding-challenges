// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A: number[]): number {
  // Implement your solution here
  let result = 0;
  let visitedZeros = 0;
  let start = 0;

  for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
          const onesLength = i - start - 1;
          result += visitedZeros * onesLength;
          if (result > 1e9) {
              return - 1;
          }
          start = i;
          visitedZeros += 1;
      } 

      if (A[i] === 1 && i === A.length - 1) {
          const onesLength = i - start;
          result += visitedZeros * onesLength;
          if (result > 1e9) {
              return -1;
          }
      }
  }

  return result;
}