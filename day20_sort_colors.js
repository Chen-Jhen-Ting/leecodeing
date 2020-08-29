
input=[2,0,2,1,1,0]
output= [0,0,1,1,2,2]

function arrangeColor(ary){
    r = 0 // 0 => red
    w = 0 // 1 => white
    b = 0 // 2 => blue
    result = []
    ary.forEach( color => {
        if(color == 0){
            r += 1
        }else if(color == 1){
            w += 1
        }else{
            b += 1
        }
    })
    if( r != 0 ){
        result = result.concat(Array(r).fill(0))
    }
    if( w != 0 ){
        result = result.concat(Array(w).fill(1))
    }
    if( b != 0 ){
        result = result.concat(Array(b).fill(2))
    }
    console.log(result)
    return result
}


function expect(a,b){
    console.log(JSON.stringify(a)==JSON.stringify(b))
}

expect(arrangeColor(input),output)