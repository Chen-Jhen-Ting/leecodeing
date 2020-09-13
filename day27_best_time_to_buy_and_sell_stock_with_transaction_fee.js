 
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
  let keep = 0
  for(let i = 0; i < ary.length; i++){
    if(keep == 0 ){
      if(ary[i] < ary[i+1]){
        keep = ary[i]
        console.log(ary[i])
      }
    }else if(ary[i]< keep){ // 如果購買股票後出現更低價
      keep = ary[i]
    }
    if(ary[i] > keep + fee){
      profit +=  ary[i] - keep - fee
      keep = 0
    }
    console.log(i)
    console.log(`keep:${keep}`)
    console.log(`profit:${profit}`)
  }
  return profit
}

function expect( a , b ){
  console.log( a == b )
}

expect(sellStock(prices,fee),output)