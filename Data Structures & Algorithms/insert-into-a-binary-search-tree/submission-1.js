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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        function dfs(node) {
            // Base case
            if (node === null) {
                return new TreeNode(val);
            }

            // Recursive step
            if (val < node.val) {
                node.left = dfs(node.left);
            } else {
                node.right = dfs(node.right);
            }

            // Return the current subtree root
            return node;
        }
        return dfs(root)
    }
}
