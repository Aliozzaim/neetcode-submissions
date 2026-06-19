/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {void} Do not return anything, modify root in-place instead.
     */
    recoverTree(root) {
    if (!root) return;

    let first = null;
    let second = null;
    let prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev && node.val < prev.val) {
            if (!first) first = prev;
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    [first.val, second.val] = [second.val, first.val];


    }
}
