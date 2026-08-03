class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
    let count = 0;
    let windowSum = 0;
    const requiredSum = threshold * k;

    for (let r = 0; r < arr.length; r++) {
        windowSum += arr[r];

        if (r >= k) {
            windowSum -= arr[r - k];
        }


        if (r >= k - 1 && windowSum >= requiredSum) {
            count++;
        }
    }

    return count;
    }
}
