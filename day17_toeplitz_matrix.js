matrix1 = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
output1= true
matrix2 = [
  [1,2],
  [2,2]
]
output2 = false
function diagonal(ary){
  for(let i=0; i< ary.length; i++){
    for(let j=0; j < ary[0].length; j++){
      if(ary[i+1] && ary[i+1][j+1]){
        if(ary[i][j] !== ary[i+1][j+1]){
          return false
        }
      }
    }
  }
  return true
}

function expect(a,b){
  console.log(a==b)
}

expect(diagonal(matrix1),output1)
expect(diagonal(matrix2),output2)
// console.log(diagonal(matrix1))
// console.log(diagonal(matrix2))