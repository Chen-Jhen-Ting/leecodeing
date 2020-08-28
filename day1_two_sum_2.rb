given_num = [2, 7, 11, 15, 1, 4, 5, 6, 3, 10]  
target = 9

def two_sum(given_num, target)
    result = []
    given_num.each do |num|
        p given_num
        another = target - num
        if given_num.include?(another)
            result << [num,another].sort
            given_num.delete(another)
        end
    end
    p result
end

two_sum(given_num, target)