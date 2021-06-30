/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */

const memoClimbStairs = (n, cache = {}) => {
  if (n < 3) return n

  if (cache[n]) return cache[n]

  cache[n] = memoClimbStairs(n - 1, cache) + memoClimbStairs(n - 2, cache)

  return cache[n]
}

const climbStairs = (n) => {
  return memoClimbStairs(n)
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(25));

