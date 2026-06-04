class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const t = target - nums[i]
            if (map.has(t)) {
               return [map.get(t), i];
            }
             map.set(nums[i], i);
        }
    }
}