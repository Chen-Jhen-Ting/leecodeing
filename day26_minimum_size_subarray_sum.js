// input:
 s = 7, nums = [2,3,1,2,4,3]
output =  2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

function minimumSize( s, ary ){
  let length = 0
  for( let i = 0 ; i < ary.length; i++){
    for(let j = i; j< ary.length; j++){
      let sum = ary.slice(i,j+1).reduce((acc,num)=>{ return acc+num },0)
      if(sum >= s){
        length = ary.slice(i,j+1).length
      }
    }
  }
  return length
}

function expect(a,b){
  console.log( a == b )
}

expect( minimumSize( s , nums ) , output )