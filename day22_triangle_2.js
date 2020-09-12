input = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]
output = 11

function lowPath(ary){
  let y = ary.length - 1
  let result = []
  
  for(let i = 0 ; i < ary.length; i++){
    result.push([])
  }
  
  result[y] = ary[y]

  for(let j = y; j > 0; j-- ){
    for(let k = 0; k < ary[j].length-1; k++){
      item = Math.min( result[j][k] , result[j][k+1] ) + ary[j-1][k]
      result[j-1].push(item)
    }
  }
  console.log(result)
  return result[0][0]
}

function expect(a,b){
 console.log(a==b)
}

expect(lowPath(input),output)