input1= [
  [1,2,3],
  [4,5,6],
  [7,8,9]]
output1 = [
  [7,4,1],
  [8,5,2],
  [9,6,3]]
input2=[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]]
output2=[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
function rotation(ary){
  y = ary.length 
  x = ary[0].length 
  result = [ [], [], [] ]
  for(let i = 0 ; i < y ; i++ ){
    for(let j = 0; j < x ; j++){
      console.log(ary[j][i])
      result[j].unshift(ary[i][j])
    }
  }
  // console.log(result)
  return result
}
function expect(a,b){
    console.log(JSON.stringify(a)==JSON.stringify(b))
}
expect(rotation(input1),output1)
// expect(rotation(input2),output2)