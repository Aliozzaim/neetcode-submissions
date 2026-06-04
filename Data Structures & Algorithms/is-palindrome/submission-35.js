class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            const left = s[l].toLowerCase();
            const right = s[r].toLowerCase();

            if (!this.isValid(left)) {
                l++;
                continue;
            }

            if (!this.isValid(right)) {
                r--;
                continue;
            }

            if (left !== right) return false;

            l++;
            r--;
        }

        return true;
    }

    isValid(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
    }
}
