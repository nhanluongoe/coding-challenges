# https://leetcode.com/problems/single-number/
#
# @param {Integer[]} nums
# @return {Integer}

def single_number(nums)
  # There is a trick with XOR: x ^ x = 0 and x ^ 0 = x
  nums.reduce { |memo, value| memo ^ value }
end

puts single_number([2, 2, 1]).to_s
puts single_number([4, 1, 2, 1, 2]).to_s
