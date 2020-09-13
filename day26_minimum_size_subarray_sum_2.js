// input:
 s = 7, nums = [2,3,1,2,4,3]
output =  2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

function minimumSize( s, ary ){
  let length = 0
  let start = 0
  let end = ary.length-1
  while( start < end ){
    let sum = ary.slice(start,end+1).reduce((acc,num)=>{ return acc+num },0 )
    
    if(sum >= s){
      length = ary.slice( start , end + 1 ).length
    }

    if(ary[start] < ary[end]){
      start += 1
    }else if (ary[start] > ary[end] ){
      end -= 1
    }else{
      
      if( ary[start+1] < ary[end-1] ){
        start +=1
      }else{
        end -=1
      }

    }
  }
  return length
}

function expect(a,b){
  console.log( a == b )
}

expect( minimumSize( s , nums ) , output )