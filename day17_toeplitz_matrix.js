matrix1 = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
output1= true
// Explanation: 
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
matrix2 = [
  [1,2],
  [2,2]
]
output2 = false
// Explanation:
// The diagonal "[1, 2]" has different elements.

function diagonal(ary){
  length = ary[0].length
  ary = ary.reduce( (x,y) => { return x.concat(y) } )
  for(let i=0; i< ary.length; i++){
    if(ary[i+length] == true && ary[i] == ary[i+length]){
      if(ary[i] != ary[i+length]){
        return false
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