# Given a sorted array of distinct integers and a target value, return the index if the target is found
# If not, return the index where it would be if it were inserted in order.
#
# You must write an algorithm with O(log n) runtime complexity.

def search_insert(nums, target)
  for idx in 0...nums.length
    return idx if target <= nums[idx]
  end

  return nums.length
end

puts search_insert([1, 3, 5, 6], 5).to_s
puts search_insert([1, 3, 5, 6], 2).to_s
puts search_insert([1, 3, 5, 6], 7).to_s
puts search_insert([1, 3, 5, 6], 0).to_s
puts search_insert([1], 0).to_s
