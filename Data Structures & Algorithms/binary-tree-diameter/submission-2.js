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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(root === null) return 0;
        let result = 0;

        function dfs(node) {
            if(node === null) return 0;

            const l = dfs(node.left)
            const r = dfs(node.right)
            result = Math.max(result, l + r)

            return 1 + Math.max(l , r)
        }
        dfs(root)
        return result 
    }
}
