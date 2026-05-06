# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

# https://leetcode.com/problems/symmetric-tree/submissions/
#
# @param {TreeNode} root
# @return {Boolean}
def is_symmetric(root)
  left_side = root_left_right_traversal(root.left)
  right_side = root_right_left_traversal(root.right)

  left_side == right_side
end

def root_left_right_traversal(root)
  return [root] if root.nil?

  [root.val] + root_left_right_traversal(root.left) +
    root_left_right_traversal(root.right)
end

def root_right_left_traversal(root)
  return [root] if root.nil?

  [root.val] + root_right_left_traversal(root.right) +
    root_right_left_traversal(root.left)
end
