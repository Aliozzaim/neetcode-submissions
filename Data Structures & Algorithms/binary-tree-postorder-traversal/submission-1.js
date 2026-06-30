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
    postorderTraversal(root) {
        let result = []
        function dfs(node) {
            if (!node) return
            let l = node.left
            let r = node.right

            dfs(l)
            dfs(r)
            result.push(node.val)


        }
        dfs(root)
        return result  
    }
}
