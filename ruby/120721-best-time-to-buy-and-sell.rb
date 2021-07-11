# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
#
# @param {Integer[]} prices
# @return {Integer}

def max_profit(prices)
  profit = 0

  (0...prices.length - 1).each do |i|
    if prices[i + 1] > prices[i]
      profit += prices[i + 1] - prices[i]
    end
  end

  profit
end

puts max_profit([7, 1, 5, 3, 6, 4])
