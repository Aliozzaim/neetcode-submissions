class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;
        let maxFreq = 0;
        let freq = new Map();
        let result = 0;
        // [X Y ] Y  X
        for (let r = 0; r < s.length; r++) {
            let ch = s[r]
            freq.set(ch, (freq.get(ch) || 0) + 1);
            maxFreq = Math.max(maxFreq, freq.get(ch));
            while ((r - l + 1) - maxFreq > k) {
                const leftChar = s[l];
                freq.set(leftChar, freq.get(leftChar) - 1);
                l++;
            }
                    result = Math.max(result, r - l + 1);
        }
    return result;

    }
}
