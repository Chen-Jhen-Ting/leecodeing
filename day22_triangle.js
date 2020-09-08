input = [
   [2],
  [3,4],
 [6,5,7],
[4,1,8,3]
]
output = 11

function lowPath(ary){
  y = 0
  x = 0
  total = ary[y][x]
  while(!!ary[y+1]){
    y+=1
    if(ary[y][x]<ary[y][x+1]){
      total += ary[y][x]
    }else{
      total +=ary[y][x+1]
      x+=1
    }
  }
  return total
}

function expect(a,b){
  console.log(a==b)
}

expect(lowPath(input),output)