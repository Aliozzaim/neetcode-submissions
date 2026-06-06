class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length;
        let max = 0;

        let result = '';
        function expand(l , r) {
            while (l >= 0 && n > r && s[r] === s[l]) {
                max = Math.max(max, r - l + 1)
                if (max === r - l + 1) {
                    result = s.slice(l, r + 1)
                }
                r++
                l--
            }

        }
        for(let i = 0; n > i; i++) {
            let l = 0;
            let r = 0;
            expand(l + i, r + i)
            expand(l + i, r + 1 + i)
        }
        return result;
    }
}
