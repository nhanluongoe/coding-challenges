class MinStack
  def initialize()
    @stack = []
  end

  def push(val)
    min = @stack.length == 0 ? val : [@stack[-1][:min], val].min
    @stack.push({ val: val, min: min })
  end

  def pop()
    @stack.pop if @stack.length > 0
  end

  def top()
    return @stack[-1][:val] if @stack.length > 0
  end

  def get_min()
    return @stack[-1][:min] if @stack.length > 0
  end
end

# Your MinStack object will be instantiated and called as such:
# obj = MinStack.new()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.get_min()
