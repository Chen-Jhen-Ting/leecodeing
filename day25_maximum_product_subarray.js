input1 = [2,3,-2,4]
output1 =  6
// Explanation: [2,3] has the largest product 6.
input2 = [-2,0,-1]
output2 = 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maximumProduct(ary){
  let max = 0
  for(let i = 0; i < ary.length; i++ ){
    for(let j = i+1; j < ary.length; j++){
      let temp = ary.slice(i,j+1).reduce( ( acc,num )=> { return acc*num},1 )
      max = Math.max(max,temp)
    }
  } 
  return max
}

function expect(a,b){
  console.log(a==b)
}

expect(maximumProduct(input1),output1)
expect(maximumProduct(input2),output2)