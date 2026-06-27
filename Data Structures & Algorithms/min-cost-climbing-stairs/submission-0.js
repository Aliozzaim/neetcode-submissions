class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
            const dp = [...cost];

    for (let i = 2; i < cost.length; i++) {
        dp[i] += Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(
        dp[cost.length - 1],
        dp[cost.length - 2]
    );
    }
}
