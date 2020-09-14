input1 = 
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
output1 = [1,2,3,6,9,8,7,4,5]
input2 =
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
output2 = [1,2,3,4,8,12,11,10,9,5,6,7]

function sprial(ary){
  let move = 'right'
  let x = 0
  let y = 0
  result = []
  while(result.length != ary.length * ary[0].length ){
    el = ary[y][x]
    result.push(el)
    if(move === 'right'){
      if(ary[y][x+1] != undefined ){
        x += 1
      }else{
        move = 'down'
        y += 1
      }
    }else if(move == 'down'){
      if(ary[y+1] != undefined ){
        y += 1
      }else{
        move = 'left'
        x -= 1
      }
    }else if(move =='left'){
      if(ary[y][x-1] !=undefined ){
        x -= 1
      }else{
        move ='top'
        y -= 1
      }
    }else if( move == 'top'){
      if(ary[y-1] != undefined && ary[y-1][x] in result == false){
        y -= 1
      }else{
        move = 'right'
        x += 1
      }
    }
  }

  console.log(`y: ${y}`)
  console.log(`x: ${x}`)
  console.log(result)
  return result
}
function expect(a,b){
  console.log( JSON.stringify(a) === JSON.stringify(b) )
}

expect(sprial(input1),output1)
expect(sprial(input2),output2)