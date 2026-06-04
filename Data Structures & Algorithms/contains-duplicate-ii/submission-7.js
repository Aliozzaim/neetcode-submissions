class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0;
        let result = false;
        let set = new Set();
        for (let r = 0; nums.length > r; r++ ) {
            if (set.has(nums[r])) {
                result = true
            }
            set.add(nums[r])
             if (r - l >= k) {
              set.delete(nums[l])
              l++
            } 
        }
        return result
    }
}
