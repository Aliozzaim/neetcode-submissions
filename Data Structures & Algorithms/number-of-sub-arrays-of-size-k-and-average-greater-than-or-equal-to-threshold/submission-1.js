class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
    let count = 0;

    for (let l = 0; l <= arr.length - k; l++) {
        let r = l;
        let subtotal = 0;

        while (r - l < k) {
            subtotal += arr[r];
            r++;
        }

        const average = subtotal / k;

        if (average >= threshold) {
            count++;
        }
    }

    return count;
    }
}
