# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        level = 0
        q = deque([root])
        while q:
            for i in range(len(q)):
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            level += 1
        return level


class Solution:
    def maxDepth2(self, root: Optional[TreeNode]) -> int:
        queue = [[root, 1]]

        height = 0

        while queue:
            node, depth = queue.pop()

            if node:
                height = max(height, depth)
                queue.append([node.left, depth + 1])
                queue.append([node.right, depth + 1])

        return height
