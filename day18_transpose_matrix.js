input1= [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
output1=  [
            [1,4,7],
            [2,5,8],
            [3,6,9]
        ]
input2= [
            [1,2,3],
            [4,5,6]
        ]
output2= [
            [1,4],
            [2,5],
            [3,6]
        ] 
function transpose(ary){
    row = ary.length
    column = ary[0].length
    result = []
    for(let i=0; i<column;i++){
        result.push([])
        for(let j=0; j< row; j++){
            result[i][j] = ary[j][i]
        }
    }
    return result
}

function expect(a,b){
    console.log(JSON.stringify(a) == JSON.stringify(b))
}

expect(transpose(input1),output1)
expect(transpose(input2),output2)