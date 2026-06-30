class Solution {
    /**
     * @param {number[]} prices
     * @param {number} money
     * @return {number}
     */
    buyChoco(prices, money) {
        prices.sort((a, b) => a - b);

        const sum = prices[0] + prices[1];

        if (sum <= money) {
            return money - sum;
        }

        return money;
    }
}
