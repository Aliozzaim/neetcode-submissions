class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 topKFrequent(nums, k) {
    const map = new Map();

    // 1. Count frequencies
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // 2. Create buckets (size = nums.length + 1)
    const buckets = Array(nums.length + 1)
        .fill()
        .map(() => []);

    // 3. Put numbers into frequency buckets
    for (const [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    // 4. Collect top k
    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}
}
