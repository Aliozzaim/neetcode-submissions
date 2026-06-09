class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
    const stack = [];

    for (const op of operations) {
        switch (op) {
            case "C":
                stack.pop();
                break;

            case "D":
                stack.push(stack.at(-1) * 2);
                break;

            case "+":
                stack.push(stack.at(-1) + stack.at(-2));
                break;

            default:
                stack.push(Number(op));
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);
    }
}
