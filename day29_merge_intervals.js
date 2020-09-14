input1 = [[1,3],[2,6],[8,10],[15,18]]
output1 = [[1,6],[8,10],[15,18]]
//Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
input2 = [[1,4],[4,5]]
output2 = [[1,5]]
//Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function merge(ary){
  result = []
  for(let i = 1; i < ary.length; i++){
    if(ary[i-1][1]-ary[i][0] >= 0){
      result.push([ary[i-1][0],ary[i][1]])
      i += 1
    }else{
      result.push(ary[i-1])
      result.push(ary[i])
    }

    result = result.filter((arr,index)=>{   
      if(result.indexOf(arr) == index){
        return arr
      }
    })
  }
  console.log(result)
  return result
}

function expect(a,b){
  console.log( JSON.stringify(a) == JSON.stringify(b) )
}

expect(merge(input1),output1)
expect(merge(input2),output2)