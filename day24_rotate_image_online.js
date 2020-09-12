input1= [
  [1,2,3],
  [4,5,6],
  [7,8,9]]
output1 = [
  [7,4,1],
  [8,5,2],
  [9,6,3]]
input2 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]]
output2 = [
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]]
function rotate(matrix) {          // function statement
  const N = matrix.length - 1;   // use a constant
  // use arrow functions and nested map;
  const result = matrix.map((row, i) =>
       row.map((val, j) => {
                            console.log(`row: ${row}, i: ${i}, j: ${j}, matrix: ${matrix[N - j][i]}`) 

                            return matrix[N - j][i]} )
  );
  matrix.length = 0;       // hold original array reference
  matrix.push(...result);  // Spread operator
  console.log(matrix)
  return matrix;
}
// rotate(input1)
rotate(input2)