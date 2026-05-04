# https://leetcode.com/problems/excel-sheet-column-title/
#
# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
  ans = ""

  while column_number > 0
    column_number -= 1
    rem = column_number % 26
    column_number /= 26
    char = ("A".ord + rem).chr

    ans = char + ans
  end

  ans
end

puts convert_to_title(701).to_s
