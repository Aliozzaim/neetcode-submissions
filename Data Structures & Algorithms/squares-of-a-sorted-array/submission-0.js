class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
//nums = [-4,-1,0,3,10]
//        l         r
// check if Math.abs(nums[l] > [nums[r]])
// calcualte nums[l] and set it to result array otherwise r 
        let r =  nums.length - 1;
        let l = 0;
        let result = [] 
        while (r >= l) {
           if(Math.abs(nums[l]) < Math.abs(nums[r])) {
            result.unshift( nums[r] * nums[r])
            r--
           } else {
             result.unshift(nums[l] * nums[l])
            l++
           }

        }
        return result
     }
      
}
