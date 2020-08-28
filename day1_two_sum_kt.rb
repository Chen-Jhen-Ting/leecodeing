# KT ANSWER
given_num = [2, 7, 11, 15, 1, 4, 5, 6, 3, 10]  
target = 9
def two_sum(nums, target)
    result = {}
    nums.each_with_index do |n, idx|
      next if n > target
  
      another = target - n
      if result.keys.include?(another)
        result[another] = n
      else
        result[n] = nil
      end
    end
    result.reduce([]) do |ary, (k,v)| 
      ary << [k, v].sort_by(&:itself) if v
      ary
    end

end
p two_sum(given_num,target)

  # expect = -> (a, b) do
  #   puts a == b
  #   puts "result: #{a}"
  # end.curry
  
  def expect(a, b)
    puts a == b
    puts "result: #{a}"
  end
  
  # expect.(two_sum([2, 7, 11, 15], 9)).([[2, 7]])
  # expect.(two_sum([3, 7, 2, 15], 9)).([[2, 7]])
  
  expect(two_sum([2, 7, 11, 15], 9), [[2, 7]])
  expect(two_sum([3, 7, 2, 15], 9), [[2, 7]])