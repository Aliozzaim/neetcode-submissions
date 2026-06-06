class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let pointer = 0; //1
        let r = nums.length - 1 //2
        let l = 0;
        let n = nums.length
         while (pointer <= r) {
            let num = nums[pointer]
            if (0 === num) {
                let temp = nums[pointer]
                nums[pointer] = nums[l]
                nums[l] = temp
                l++
                pointer++
            } else if (2 === num) {
                let temp = nums[pointer]
                nums[pointer] = nums[r]
                nums[r] = temp
                r--
            } else {
             pointer++
            }
        }
    }
}
