input1= [-4,-1,0,3,10]
output1= [0,1,9,16,100]

input2= [-7,-3,2,3,11]
output2= [4,9,9,49,121]

const squaresAndSort = ary => ary.map( x => x**2)
                                 .sort( (x,y)=>{return x-y})

function squaresAndSort2(ary){
    let start = 0
    let end = ary.length-1
    result = []
    while(start<=end){
        if( Math.abs(ary[start]) > Math.abs(ary[end]) ){
            result.unshift(ary[start]**2)
            start +=1
        }else{
            result.unshift(ary[end]**2)
            end -= 1
        }
    }
    return result
}

const expect = (a,b) =>{ console.log(JSON.stringify(a)==JSON.stringify(b))}

expect(squaresAndSort(input1),output1)
expect(squaresAndSort(input2),output2)
console.log("~~~~~~~")
expect(squaresAndSort2(input1),output1)
expect(squaresAndSort2(input2),output2)