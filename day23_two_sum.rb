# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1]

# 在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。

given_num = [2, 7, 11, 15, 1, 4, 5, 6, 3, 10]  
target = 9

def two_sum(given_num, target)
    result= []
    bottom = given_num.length-1
    start = 0
    for i in [*start..bottom]
        new = i+1
        for j in [*new..bottom]
            if  given_num[i] + given_num[j] == target
                result << [given_num[i],given_num[j]]
            end
        end
    end
    return result
end

p two_sum(given_num, target)

expect = -> (a,b){p a==b }.curry
expect.(two_sum(given_num,target)).(([[2, 7], [4, 5], [6, 3]]))


