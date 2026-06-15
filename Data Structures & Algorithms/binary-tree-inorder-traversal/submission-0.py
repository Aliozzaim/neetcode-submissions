# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []

        def dfs(node):
            if not node:
                return

            # 1. left
            dfs(node.left)

            # 2. visit root
            result.append(node.val)

            # 3. right
            dfs(node.right)

        dfs(root)
        return result
