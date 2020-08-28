# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
given_array = [-2,1,-3,4,-1,2,1,-5,4]

def mxaimum_subarray(arr)
  if not arr.is_a?(Array)
    return 'give me array'
  elsif arr.length == 0
    return 'nothing in array'
  else
    arr.each_with_index do |item,idx|
      if item.to_s.match?(/\d/)
        next
      else
        return 'give me number list'
      end
    end
  end

	sum,sub_array,start_at,end_at=[0,[],0,arr.length-1]
	while start_at < end_at
    current_sum =arr[start_at..end_at].sum
    
    if sum < current_sum
      sub_array = arr[start_at..end_at]
      sum = current_sum
    end

    if arr[start_at] < arr[end_at]
      start_at += 1
    else
      end_at -= 1
    end

  end
  puts sum
  return sub_array
end

p mxaimum_subarray(given_array)

