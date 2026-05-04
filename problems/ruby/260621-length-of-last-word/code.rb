# 
# https://leetcode.com/problems/length-of-last-word/submissions/
#

def length_of_last_word(s)
  (s.split(/\s+/).reject {|word| word.empty?} [-1] || '').length
end

puts length_of_last_word(' ').to_s
puts length_of_last_word(' hello word ').to_s
puts length_of_last_word(' avcasdf dsf aaaaa     ')