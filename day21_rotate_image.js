input=[ [1,3,1],
[1,5,1],
[4,2,1]]

output =  7

function minimumPath(ary){
    let x = ary.length-1
    let y = ary[0].length-1
}

function expect(a,b){
    console.log(a==b)
}
expect(minimumPath(input),output)
