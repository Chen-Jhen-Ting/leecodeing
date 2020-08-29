input1= [-4,-1,0,3,10]
output1= [0,1,9,16,100]

Input2= [-7,-3,2,3,11]
output2= [4,9,9,49,121]

const squaresAndSort = ary => ary.map( x => x**2)
                                 .sort( (x,y)=>{return x-y})


console.log(squaresAndSort(input1))