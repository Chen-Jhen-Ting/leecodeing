input1 = [[1,2],[3,4]]
r1 = 1, c1 = 4
output1 = [[1,2,3,4]]
// Explanation:The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

input2 = [[1,2],[3,4]]
r2 = 2, c2 = 4
output2= [[1,2],[3,4]]
// Explanation:There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

function reshape(ary,r,c){
    let a = JSON.stringify(ary)
        a = JSON.parse(a)
    while(a[1]){
        a[0] = a[0].concat(a.pop())
    }
    if (r*c == a[0].length){
        return a
    }else{

        return ary.sort( (x,y) => {return x-y} )
    }
}

function expect(a,b){
    console.log( JSON.stringify(a) == JSON.stringify(b) )
}
expect(reshape(input1,r1,c1),output1)
expect(reshape(input2,r2,c2),output2)