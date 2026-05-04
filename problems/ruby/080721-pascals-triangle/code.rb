# https://leetcode.com/problems/pascals-triangle/
#
# @param {Integer} num_rows
# @return {Integer[][]}

def generate(num_rows)
  res = []
  prev_row = nil

  (1..num_rows).each do |i|
    cur_row = Array.new(i, 1)

    if prev_row
      (1...i - 1).each do |j|
        cur_row[j] = prev_row[j - 1] + prev_row[j]
      end
    end

    res.push(cur_row)
    prev_row = cur_row
  end

  res
end

puts generate(1).to_s
puts generate(2).to_s
puts generate(3).to_s
puts generate(4).to_s
puts generate(5).to_s
