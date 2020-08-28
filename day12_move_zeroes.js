input= [0,1,0,3,12]
output= [1,3,12,0,0]

function moveZero(ary){
    a = ary.sort( (x,y)=>{ return x-y } )  //[ 0, 0, 1, 3, 12 ]
    console.log(a)
    while(a[0]== 0){
        b = a.shift()
        a.push(b)
    }
    return a
}

function expect(a,b){
    console.log(JSON.stringify(a)===JSON.stringify(b))
}

expect(moveZero(input),output)