/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            // last node in this level = right side view
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);

        }
    }

    return result;
    }
}
