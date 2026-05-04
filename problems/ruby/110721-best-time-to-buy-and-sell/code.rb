# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
#
# @param {Integer[]} prices
# @return {Integer}

def max_profit(prices)
  min_price = Float::INFINITY
  max_diff = 0

  (0...prices.length).each do |i|
    max_diff = [max_diff, prices[i] - min_price].max
    min_price = [min_price, prices[i]].min
  end

  max_diff
end

puts max_profit([7, 1, 5, 3, 6, 4]).to_s
puts max_profit([2, 4, 1]).to_s
