class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
    let l = 0;
    let maxLen = 0;
    let zeros = 0;

    for (let r = 0; r < nums.length; r++) {
        const num = nums[r];
        if (num === 0) {
            zeros++
        }

        while (zeros > k) {
            if (nums[l] === 0) zeros--;
            l++;
        }

        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
    }
}
