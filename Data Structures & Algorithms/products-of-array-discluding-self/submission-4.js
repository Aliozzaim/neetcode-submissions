class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums = []) {
         // nums = [1,x,4,6]
        //  nums = [1,x,4,6]
        ///result[i] = nums[0] * nums[1] * ... * nums[i-1] * nums[i+1] * ... * nums[n-1]
        const n = nums?.length
        let result = Array(n).fill(1);
        let prefix = 1;
        for (let i = 0; i < n; i++ ) {
            result[i] *= prefix
            prefix *= nums[i]
        }
        let suffix = 1;
        for (let i = n -1; i >= 0; i--) {
            result[i] *= suffix
            suffix *= nums[i]
        }
        return result 
    }
}
