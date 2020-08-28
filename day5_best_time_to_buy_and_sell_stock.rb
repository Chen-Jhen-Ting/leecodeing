
stock_price_per_day1 = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
#              Not 7-1 = 6, as selling price needs to be larger than buying price.
stock_price_per_day2 = [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transaction is done, i.e. max profit = 0.

def max_profit( arr )
    max,buy,sell = [0,0,arr.length-1]
    while buy < sell
        if arr[sell]-arr[buy] >= 0
            temp =  arr[sell]-arr[buy]
            
            if max < temp
                max = temp
            end

        end

        if arr[buy] > arr[sell]
            buy += 1
        else
            sell -= 1
        end
    end
    max
end

p max_profit(stock_price_per_day1)
p max_profit(stock_price_per_day2)
