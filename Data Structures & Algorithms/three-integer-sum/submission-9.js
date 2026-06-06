class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        // -4, -1,-1, 0, 1, 2,
        let result = [];
        // [-4, -1, -1, 0, 1, 2]
        //   i       l        r
        for (let i = 0; i < nums.length - 2; i++) { // 2 
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let r =  nums.length - 1;
            let l = i + 1;
           while (l < r) {
                const sum = nums[i] + nums[r] + nums[l]

            if (sum === 0) {
                        result.push([nums[i], nums[l], nums[r]]);

                        l++;
                        r--;

                        while (l < r && nums[l] === nums[l - 1]) {
                            l++;
                        }

                        while (l < r && nums[r] === nums[r + 1]) {
                            r--;
                        }
            } else if (0 > sum ) {
                    l++
                } else {
                    r--
                }
            }
        }

        return result
    }
}

