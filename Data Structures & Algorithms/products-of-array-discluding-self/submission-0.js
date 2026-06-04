class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums = []) {
        if (!nums?.length) return 
        let product = nums.reduce((acc, num) => acc * num, 1);
        let result = [];
        for (let i = 0; i < nums?.length; i++ ) {
            if (nums[i] === 0) {
                const copy = [...nums];
                copy.splice(i, 1);
                const newProduct = copy.reduce((acc, num) => acc * num, 1);
                result[i] = newProduct 
                continue 
            }

            result[i] = nums[i] !== 0 ? product / nums[i] : product
        }
        return result 
    }
}
