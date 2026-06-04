class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentSum = 0;

        for (let i = 0; i < nums.length; i++) {
            if ( 0 > currentSum) {
                currentSum = 0
            }
            currentSum += nums[i]
            maxSum = Math.max(maxSum, currentSum)
        } 
        return maxSum
    }
}
