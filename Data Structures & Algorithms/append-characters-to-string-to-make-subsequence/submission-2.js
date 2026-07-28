class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let l = 0; // pointer for s
        let r = 0; // pointer for t

        while (l < s.length && r < t.length) {
            if (s[l] === t[r]) {
                r++;
            }

            l++;
        }

        return t.length - r;
    }
}
