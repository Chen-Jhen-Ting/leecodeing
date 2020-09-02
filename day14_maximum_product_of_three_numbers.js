input1 = [1,2,3]
output1 = 6

input2 = [1,2,3,4]
output2 = 24

function maxProduct(ary){
    ary = ary.map(x => Math.abs(x))
    sortAry = ary.sort((x,y)=>{return x-y})

    a = sortAry.pop()
    b = sortAry.pop()
    c = sortAry.pop()
    return a*b*c
}

function expect(a,b){
    console.log( a == b)
}
expect(maxProduct(input1),output1)
expect(maxProduct(input2),output2)