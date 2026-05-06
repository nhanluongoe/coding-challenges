# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

# https://leetcode.com/problems/same-tree/submissions/
# @param {TreeNode} p
# @param {TreeNode} q
# @return {Boolean}

def is_same_tree(p, q)
  arr_tree_1 = preorder_traversal(p)
  arr_tree_2 = preorder_traversal(q)

  arr_tree_1 == arr_tree_2
end

def preorder_traversal(root)
  return [root] if root.nil?

  [root.val] + preorder_traversal(root.left) + preorder_traversal(root.right)
end
