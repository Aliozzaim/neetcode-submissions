class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let min = Infinity;
        let max = -Infinity;

        for (const num of nums) {
            if (num < min) min = num;
            if (num > max) max = num;
        }

        const arr = new Array(max - min + 1).fill(0);

        // count frequencies
        for (const num of nums) {
            arr[num - min]++;
        }

        // go from largest to smallest
        let count = 0;

        for (let i = arr.length - 1; i >= 0; i--) {
            count += arr[i];

            if (count >= k) {
                return i + min;
            }
        }
    }
}
