# https://leetcode.com/problems/pascals-triangle-ii/
#
# @param {Integer} row_index
# @return {Integer[]}
def get_row(row_index)
  res = []
  prev_row = nil

  num_rows = row_index + 1
  (1..num_rows).each do |i|
    cur_row = Array.new(i, 1)

    if (prev_row)
      (1...(i - 1)).each do |j|
        cur_row[j] = prev_row[j - 1] + prev_row[j]
      end
    end

    prev_row = cur_row
    res.push(cur_row)
  end

  res[row_index]
end

puts get_row(0).to_s
puts get_row(1).to_s
puts get_row(2).to_s
puts get_row(3).to_s
puts get_row(4).to_s
puts get_row(5).to_s
