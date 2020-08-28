def max_area(heights = [])
  max, start_at, end_at = [0, 0, heights.length - 1]
  while start_at < end_at
    width = end_at - start_at
    high = 0

    if heights[start_at] < heights[end_at]
      high = heights[start_at]
      start_at += 1
    else
      high = heights[end_at]
      end_at -= 1
    end

    temp = width * high
    max = temp if temp > max
  end

  max
end

def expect(a, b)
  p a == b
end

expect(max_area([1,8,6,2,5,4,8,3,7]), 49)
