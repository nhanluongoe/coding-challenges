# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end


# https://leetcode.com/problems/binary-tree-inorder-traversal/
#
# @param {TreeNode} root
# @return {Integer[]}

def inorder_traversal(root)
  return [] if root.nil?

  inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)
end