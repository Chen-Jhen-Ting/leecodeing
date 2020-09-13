 
prices = [1, 3, 2, 8, 4, 9] 
fee = 2
output= 8
// Explanation: The maximum profit can be achieved by:
// Buying at prices[0] = 1
// Selling at prices[3] = 8
// Buying at prices[4] = 4
// Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.

function sellStock(ary,fee){
  let profit = 0
}

function expect( a , b ){
  console.log( a == b )
}

expect(sellStock(prices,fee),output)