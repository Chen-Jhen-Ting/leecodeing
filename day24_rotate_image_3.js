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
function rotation(ary){
  let start = 0
  let end = ary.length - 1
  let turn = 0          // 轉到 ary.length -1 到下一圈
  let max_turn = ary.length-1
  
  while( start <  end){


    temp = ary[start][start+turn] 
    ary[start][start+turn] = ary[end-turn][start]   //[2][0] -> [0][0] 01
    ary[end-turn][start] = ary[end][end-turn]       //[2][2] -> [2][0] 12
    ary[end][end-turn] = ary[start+turn][end]       //[0][2] -> [2][2] 21
    ary[start+turn][end] = temp                     //[0][0] -> [0][2] 10
    
    // console.log(1)
    turn +=1
    if( turn == max_turn){
      start += 1
      end   -= 1
      max_turn -=2
      turn = 0
    }
  }
  console.log(ary)
  return ary
}
function expect(a,b){
  console.log(JSON.stringify(a)==JSON.stringify(b))
}
expect(rotation(input1),output1)
expect(rotation(input2),output2)

// rotation(input1)