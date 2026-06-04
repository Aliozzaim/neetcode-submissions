class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        while (r > l) { 
            if (numbers[r] + numbers[l] === target) {
                console.log('numbers[l]', numbers[l], numbers[r])
                return [l +1,r +1]
            }
            if (numbers[r] + numbers[l] > target) {
                r--
            } else {
                l++
            }
        }
    }
}
