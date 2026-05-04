#
# https://leetcode.com/problems/maximum-subarray/
#
# O(n)
#

def max_sub_array(nums)
  max = nums[0]
  sum = 0

  nums.each do |num|
    sum = [num, sum + num].max
    max = [sum, max].max
  end

  max
end

puts max_sub_array([-2, 1, -3, 4, -1, 2, 1, -5, 4]).to_s
puts max_sub_array([1]).to_s
puts max_sub_array([5, 4, -1, 7, 8]).to_s
