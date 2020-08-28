
# 起始點可以是index 0 或 1
# 一次可以走1格或是2格
# 每一個代表的是cost
# 找到最小cost

a = [10, 15, 20] # 15
b = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] # 6

# 解法: 先扣除index 0，算後面的走法
# 問題:
#      index 1的cost小於index 2的話，會被算入走法內，因此初始值就為0
#      index 1的cost大於index 2的話，就不會算入走法，因此初始值必須有index 1的cost

# while version
def min_cost(ary)
  a = ary[0]
  b = ary[1] < ary[2].to_i ? 0 : ary[1]
  total = 0
  idx = 1
  while idx < ary.size
    if ary[idx] < ary[idx + 1].to_i
      total += ary[idx].to_i
      idx += 1
    else
      total += ary[idx + 1].to_i
      idx += 2
    end
  end
  [a + total, b + total].min
end

# recursive version
def min_cost(ary, a = nil, b = nil, total = 0)
  if ary.size == 0
    [a + total, b + total].min
  elsif ary && a.nil? && b.nil?
    a = ary.shift
    b = ary[0] < ary[1].to_i ? 0 : ary[0]
    min_cost(ary, a, b, total)
  else
    if ary[0] < ary[1].to_i
      total += ary[0]
    else
      total += ary[1].to_i
      ary.shift
    end
    ary.shift
    min_cost(ary, a, b, total)
  end
end

expect = -> (a, b) do
  p rs = min_cost(a)
  rs == b
end.curry

expect.(a).(15)
expect.(b).(6)