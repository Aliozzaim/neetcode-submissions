class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    const map = new Map();

    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }

    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (const [num, freq] of map.entries()) {
        buckets[freq].push(num);
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) return result;
        }
    }

    return result;
    }
}
