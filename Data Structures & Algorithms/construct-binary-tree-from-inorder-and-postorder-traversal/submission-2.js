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
     * @param {number[]} inorder
     * @param {number[]} postorder
     * @return {TreeNode}
     */
    buildTree(inorder, postorder) {
        const map = new Map();

        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        let postIndex = postorder.length - 1;

        function build(left, right) {
            if (left > right) return null;
            const rootVal = postorder[postIndex--];
            const root = new TreeNode(rootVal);
            const mid = map.get(rootVal)
            root.right = build(mid + 1, right);
            root.left = build(left, mid - 1);
            return root;
        }

        return build(0, inorder.length - 1);
    }
}
