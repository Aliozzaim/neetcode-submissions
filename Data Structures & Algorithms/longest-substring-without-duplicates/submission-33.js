class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const substring = new Set();
        let l = 0
        let max = 0

        for (let r = 0; r < s.length; r++) {
            while (substring.has(s[r])) {
                substring.delete(s[l]);
                l++;
            }

            substring.add(s[r]);
            max = Math.max(max, r - l + 1);
            }

        return max
    }
}
