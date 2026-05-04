# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

# https://leetcode.com/problems/balanced-binary-tree/
#
# @param {TreeNode} root
# @return {Boolean}
def is_balanced(root)
  return true if root.nil?

  left_height = get_height(root.left)
  right_height = get_height(root.right)

  (left_height - right_height).abs <= 1 && is_balanced(root.left) && is_balanced(root.right)
end

def get_height(root)
  return 0 if root.nil?

  1 + [get_height(root.left), get_height(root.right)].max
end