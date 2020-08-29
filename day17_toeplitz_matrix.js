matrix1 = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
output1= True
// Explanation: 
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
matrix2 = [
  [1,2],
  [2,2]
]
output2 = False
// Explanation:
// The diagonal "[1, 2]" has different elements.

function diagonal(ary){

}

function expect(a,b){
  console.log(a==b)
}

expect(diagonal(matrix1),output1)
expect(diagonal(matrix2),output2)