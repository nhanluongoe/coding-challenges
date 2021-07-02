# @param {Integer[]} nums1
# @param {Integer} m
# @param {Integer[]} nums2
# @param {Integer} n
# @return {Void} Do not return anything, modify nums1 in-place instead.

def merge(nums1, m, nums2, n)
  (1..(nums1.length - m)).each do
    nums1.pop
  end

  nums2.each do |num|
    nums1.push(num)
  end

  nums1.sort!
end

nums1 = [1, 2, 3, 0, 0, 0]
nums2 = [2, 5, 6]
m = 3
n = 3

merge(nums1, m, nums2, n)

puts nums1.to_s
