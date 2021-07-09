# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

# https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/
#
# @param {TreeNode} root
# @return {Integer}

def min_depth(root)
  min_depth_helper(root).infinite? ? 0 : min_depth_helper(root)
end

def min_depth_helper(root)
  return Float::INFINITY if root.nil?

  return 1 if leaf?(root)

  1 + [min_depth_helper(root.right), min_depth_helper(root.left)].min
end

def leaf?(root)
  root && (root.left || root.right).nil?
end

# shorter solution
def better_min_depth(root)
  return 0 if root.nil?

  left_height = better_min_depth(root.left)
  right_height = better_min_depth(root.right)

  if (left_height === 0 || right_height === 0)
    return 1 + left_height + right_height
  end

  1 + [left_height, right_height].min
end
