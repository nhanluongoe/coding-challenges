function climbStairs(n) {
  const dp = []

  // base case
  dp[n] = 0;
  dp[n - 1] = 1;
  dp[n - 2] = 2;

  // bottom up DP
  for (let i = n - 3; i >= 0; i--) {
    dp[i] = dp[i + 1] + dp[i + 2];
  }

  return dp[0];
};

console.log(climbStairs(5));


/*
 * Explaination
 *
 * stairs: 5 4 3 2 1 0
 * ways:   0 1 2 3 5 8
 * */
