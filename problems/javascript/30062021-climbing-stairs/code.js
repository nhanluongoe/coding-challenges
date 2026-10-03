/**
 * https://leetcode.com/problems/climbing-stairs/
 *
 * @param {number} n
 * @return {number}
 */

// Memoization-based method
const memoClimbStairs = (n, cache = {}) => {
  if (n < 3) return n

  if (cache[n]) return cache[n]

  cache[n] = memoClimbStairs(n - 1, cache) + memoClimbStairs(n - 2, cache)

  return cache[n]
}

const climbStairs = (n) => {
  return memoClimbStairs(n)
}

// Other method - O(n)
const climbStairsTwo = (n) => {
  if (n < 3) return n

  let cache = { 1: 1, 2: 2 }

  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 2] + cache[i - 1]
  }

  return cache[n]
}

export { climbStairsTwo }
export default climbStairs
