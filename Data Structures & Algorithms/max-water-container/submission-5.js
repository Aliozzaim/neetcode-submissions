class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length;
        let l = 0;
        let r = n - 1;
        let maxH = 0;
        while(r > l) {
            let width = r - l

            const curentH =  Math.min(heights[l],  heights[r]) * width
            maxH = Math.max(maxH, curentH)

            if (heights[r] > (heights[l])){
                l++
            } else{
                r--

            }

        }
        return maxH;

    }
}
