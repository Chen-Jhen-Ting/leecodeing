input= [2,1,5,6,2,3]
output= 10

function rectangle(ary){
  temp = 0
  end = ary.length-1
  while(ary.length!=0){
    current = ary.length * Math.min(...ary)
    if(temp < current){
      temp = current
    }
    if(ary[0]<ary[end]){
      ary.shift()
      end -= 1
    }else{
      ary.pop()
      end-=1
    }
  }
  console.log(temp)
  return temp
}

function expect(a,b){
  console.log( a == b )
}

expect(rectangle(input),output)