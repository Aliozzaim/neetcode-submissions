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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function isSubtreeHelper(node) {
            if (!node) return false;

            if (isSameTree(node, subRoot)) {
                return true;
            }

            return (
                isSubtreeHelper(node.left) ||
                isSubtreeHelper(node.right)
            );
        }

        function isSameTree(a, b) {
            if (!a && !b) return true;

            if (!a || !b) return false;

            if (a.val !== b.val) return false;

            return (
                isSameTree(a.left, b.left) &&
                isSameTree(a.right, b.right)
            );
        }

        return isSubtreeHelper(root);
    }
}
