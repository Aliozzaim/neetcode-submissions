class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
let l = 0; // pointer for s

for (let i = 0; i < t.length && l < s.length; i++) {
    if (t[i] === s[l]) {
        l++;
    }
}

return l === s.length;
    }
}
