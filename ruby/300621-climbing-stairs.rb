#
# https://leetcode.com/problems/climbing-stairs/
#
# @param {Integer} n
# @return {Integer}

class MemoClimbStairs
  def initialize
    @cache = {}
  end

  def memo_climb_stairs(n)
    return n if n < 3

    @cache[n] ||= memo_climb_stairs(n - 1) + memo_climb_stairs(n - 2)
  end
end

def climb_stairs(n)
  res = MemoClimbStairs.new

  res.memo_climb_stairs(n)
end

puts climb_stairs(2).to_s
puts climb_stairs(3).to_s
puts climb_stairs(4).to_s
puts climb_stairs(25).to_s
