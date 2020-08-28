given_array_nums = [-1, 0, 1, 2, -1, -4]
output = [[-1, 0, 1],[-1, -1, 2]]

def sum_zero( arr )
    result = []
    for i in [*0..arr.size-1-2]   
        for j in [*i+1..arr.size-1-1]
            for k in [*j+1..arr.size-1]
                if arr[i] + arr[j] + arr[k] == 0
                    p [i, j, k]
                    result << [arr[i],arr[j],arr[k]].sort
                end
            end
        end
    end
    return result.uniq
end

def sum_zero2(ary)
    result = []
    0.upto(ary.size-1-2) do |i|
        (i+1).upto(ary.size-1-1) do |j|
            (j+1).upto(ary.size-1) do |k|
                pair = [ary[i], ary[j], ary[k]].sort
                result << pair if pair.sum == 0    
            end
        end
    end
    result.uniq
end

#  ^ 這是啥要查清楚   sor  true true => false  false false => false   true false=> true  false true=> true
def expect(a,b)
    p a
    p a == b
end

expect(sum_zero(given_array_nums),output)
expect(sum_zero2(given_array_nums),output)
