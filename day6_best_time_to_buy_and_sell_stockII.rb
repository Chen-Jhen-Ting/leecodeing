input1 = [7,1,5,3,6,4]
Output1= 7
input2 = [1,2,3,4,5]
Output2= 4
input3 = [7,6,4,3,1]
Output3= 0

def max_profit(arr)
    profit = 0
    keep = 0
    for i in [*0..arr.length-1]
        if arr[i+1] != nil and arr[i+1] < arr[i] and keep != 0
            profit += arr[i] - keep
            keep = 0
        elsif arr[i+1] != nil and arr[i+1] >= arr[i] and keep ==0
            keep = arr[i]
        elsif i == arr.length-1 and keep != 0
            profit += arr[i] - keep
        end
    end
    return profit
end

def expect(a, b)
    p a == b
end
  
p max_profit(input1)
expect(max_profit(input1), 7)
expect(max_profit(input2), 4)
expect(max_profit(input3), 0)
  

