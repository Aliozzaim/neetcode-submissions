class Solution {
    lowestCommonAncestor(root, p, q) {
        if (!root || root === p || root === q) return root;

        const left = this.lowestCommonAncestor(root.left, p, q);
        const right = this.lowestCommonAncestor(root.right, p, q);

        if (left && right) return root;

        return left || right;
    }
}