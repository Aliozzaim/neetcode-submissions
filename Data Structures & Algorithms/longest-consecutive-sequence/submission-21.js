class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(numss) {
        const set = new Set(numss);
        let nums = [...set]
        let max = 0;
        if (nums.length === 0) return 0
        for (let i = 0;  i < nums.length; i++) {
            if(!set.has(nums[i] - 1)) {
               let num = nums[i]
               let length = 1
                while (set.has(num + 1)) {
                    num++
                    length++
                }
                max = Math.max(max, length)
            }
        }

        
        return max
    }
}
