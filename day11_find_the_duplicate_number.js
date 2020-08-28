input1 = [1,3,4,2,2]
output1 = 2

input2 = [3,1,3,4,2]
output2 = 3

function findDuplicate (ary){
    a= ary.filter( (x,index) => { if(ary.indexOf(x) !== index){ return x }})

    return parseInt(a)
}

function expect(a,b){
    console.log( a == b )
}

expect(findDuplicate(input1),output1)
// console.log(findDuplicate(input1))