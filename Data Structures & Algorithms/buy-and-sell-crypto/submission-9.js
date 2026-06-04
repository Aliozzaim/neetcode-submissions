class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let r = 1;
        let l = 0
        let profit = 0
        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const currentProfit =  prices[r] - prices[l]
                profit = Math.max(profit, currentProfit)
            } else {
               l = r 
            }
            r++
        }
        return profit
    }
}
