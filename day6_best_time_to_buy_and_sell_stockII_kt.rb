# SOVLE VERSION
# times, reduce version
def profit(ary)
  (ary.size - 1).times.reduce(0) do |rs, idx|
    cnt = ary[idx + 1] - ary[idx]
    rs + (cnt > 0 ? cnt : 0)
  end
end

# while version
def profit(ary)
  idx = 0
  rs = 0
  while idx < ary.size - 1
    cnt = ary[idx + 1] - ary[idx]
    rs += cnt if cnt > 0
    idx += 1
  end
  rs
end

# recursive version
def profit(ary, total = 0)
  return total if ary.size <= 1
  
  cnt = ary[1] - ary.shift
  profit(ary, total + (cnt > 0 ? cnt : 0))
end

expect = -> (a, b) do
  rs = profit(a)
  p rs
  p rs == b
end.curry

expect.([7,1,5,3,6,4]).(7)
expect.([1,2,3,4,5]).(4)
expect.([7,6,4,3,1]).(0)
