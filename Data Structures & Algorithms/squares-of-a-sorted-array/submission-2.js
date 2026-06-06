class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let r = nums.length - 1;
        let l = 0;
        let result = new Array(nums.length);
        let pos = nums.length - 1;

        while (l <= r) {
            if (Math.abs(nums[l]) > Math.abs(nums[r])) {
                result[pos] = nums[l] * nums[l];
                l++;
            } else {
                result[pos] = nums[r] * nums[r];
                r--;
            }
            pos--;
        }

        return result;
    }
}