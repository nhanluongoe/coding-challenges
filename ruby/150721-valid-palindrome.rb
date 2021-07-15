# https://leetcode.com/problems/valid-palindrome/
#
# @param {String} s
# @return {Boolean}
def is_palindrome(s)
  filtered_s = s.gsub(/[^a-z0-9]/i, "").downcase

  filtered_s == filtered_s.reverse
end

puts is_palindrome("A man, a plan, a canal: Panama").to_s
puts is_palindrome("This is, absolutely, not a _ palin_drome").to_s
