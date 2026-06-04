class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const size =  new Set(nums).size
       return size !== nums.length
    }
}
