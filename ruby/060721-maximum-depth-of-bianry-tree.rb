# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

# https://leetcode.com/problems/maximum-depth-of-binary-tree/
#
# @param {TreeNode} root
# @return {Integer}
def max_depth(root)
  return 0 if root.nil?

  [1 + max_depth(root.left), 1 + max_depth(root.right)].max
end
