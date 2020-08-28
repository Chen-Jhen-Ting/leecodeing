given_nums1 = [1,1,2]
given_nums2 = [0,0,1,1,1,2,2,3,3,4]

def get_length (arr)
  if arr.length == 0
    return 'Nothing is given.'
  end
  
	uniq_arr = arr.uniq
  uniq_arr_long = arr.uniq.length
  rearranged = uniq_arr
  
	uniq_arr.each do |num|
    show_times = arr.count(num)
    if show_times-1 == 0
      next
    else
      rearranged = rearranged + ( [num] * ( show_times - 1 ) )
    end
  end
  p "unique array  #{uniq_arr}"
  p "unique array length #{uniq_arr_long}"
  p "rearranged array #{rearranged}"
  rearranged
end

get_length(given_nums1)
get_length(given_nums2)