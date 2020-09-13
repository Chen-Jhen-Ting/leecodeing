
input1 = [2,3,-2,4]
output1 =  6
// Explanation: [2,3] has the largest product 6.
input2 = [-2,0,-1]
output2 = 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maximumProduct(ary){
  let max = 0
  let current = 1
  for( let i = 0; i < ary.length; i++ ){
    current = current * ary[i]
    
    if(max < current){
      max = current
    }

    if( ary[i] === 0){
      current = 1
    }
  }
  return max
}

function expect(a,b){

  console.log(a===b)
}

expect(maximumProduct(input1),output1)
expect(maximumProduct(input2),output2)

// n > 0
// n = 0
// n < 0