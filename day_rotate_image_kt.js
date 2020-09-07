// input=[
//   [1,2],
//   [3,4]
// ]
// output=[
//   [3,1],
//   [4,2]
// ]
// max = ary.length - 1
// [0,0]  [2,0]     [2,2]   [0,2]
// [0,i]  [y-i,0]   [y,y-i] [i,y]
// [0,1]  [1,0]     [2,1]   [1,2] 
input1= [
  [1,2,3],
  [4,5,6],
  [7,8,9]]
output1 = [
  [7,4,1],
  [8,5,2],
  [9,6,3]]
//3x3 ok
//  [ 7, 4, 1 ] 
//  [ 8, 5, 2 ] 
//  [ 9, 6, 3 ] 
// function rotation(ary){
//   y = ary.length < 3 ? 1 : ary.length - 1
//   times = ary.length < 3 ? y : y
//   for(let i=0; i < times  ; i++){
//     temp = ary[0][i] 
//     ary[0][i] = ary[y-i][0]   //[2][0] -> [0][0] 01
//     ary[y-i][0] = ary[y][y-i]   //[2][2] -> [2][0] 12
//     ary[y][y-i] = ary[i][y]   //[0][2] -> [2][2] 21
//     ary[i][y] = temp        //[0][0] -> [0][2] 10

//   }
//   console.log(ary)
//   return ary
// }


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
  y = ary.length < 3 ? 1 : ary.length - 1
  times = ary.length < 3 ? y : y
  for(let i=0; i < times  ; i++){
    temp = ary[0][i] 
    ary[0][i] = ary[y-i][0]   //[2][0] -> [0][0] 01
    ary[y-i][0] = ary[y][y-i] //[2][2] -> [2][0] 12
    ary[y][y-i] = ary[i][y]   //[0][2] -> [2][2] 21
    ary[i][y] = temp          //[0][0] -> [0][2] 10
  }
  console.log(ary)
  return ary
}
function expect(a,b){
  console.log(JSON.stringify(a)==JSON.stringify(b))
}
expect(rotation(input1),output1)
expect(rotation(input2),output2)



// a,b,c,d = b,c,d,a
// 1: [0,0]=>[0,2] (x,y)=>(y,x-i)
// 2: [0,1]=>[1,2]
// 3: [0,2]=>[2,2]

// 4: [1,0]=>[0,1]
// 5: [1,1]=>[1,1]
// 6: [1,2]=>[2,1]

// 7: [2,0]=>[0,0]
// 8: [2,1]=>[1,0]
// 9: [2,2]=>[2,0]


