#
# https://leetcode.com/problems/plus-one/
#

def plus_one(digits)
  (digits.join('').to_i + 1).to_s.split(//).map { |digit| digit.to_i}
end

puts plus_one([1, 2, 3]).to_s
puts plus_one([4, 3, 2, 1]).to_s
puts plus_one([0]).to_s
puts plus_one([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]).to_s
