cost1 = [10, 15, 20]
output1= 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
output2= 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
function lowestCost (ary){
  a = ary[0]

  if(ary[1] < ary[2]){
    b = 0
  }else{
    b = ary[1]
  }

  index = 1
  total = 0 
  while(index < ary.length){ 
    if( ary[index] < ary[index+1] ){
      total += ary[index]
      index += 1  
    }else{
      total += (ary[index+1] || 0)
      index += 2
    }
  }
  return Math.min(a+total,b+total)
}
function expect(a,b){
    console.log( a == b )
}
expect(lowestCost(cost1),output1)
expect(lowestCost(cost2),output2)
