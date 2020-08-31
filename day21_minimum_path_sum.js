input=[ [1,3,1],
        [1,5,1],
        [4,2,1]]

output =  7

function minimumPath(ary){
    let x = ary.length-1
    // console.log(x)
    let y = ary[0].length-1
    // console.log(y)
    let total = ary[x][y]
    while(x >= 1 || y >= 1 ){
        if(x-1 < 0){ x = 1} //保證不會選到矩陣以外的東西
        if(y-1 < 0){ y = 1}
        if(ary[x-1][y] < ary[x][y-1]){
            total += ary[x-1][y]
            x -=1
        }else{
            total += ary[x][y-1]
            y -=1
        }
    }
    console.log(total)
    return total
}

function expect(a,b){
    console.log(a==b)
}
expect(minimumPath(input),output)