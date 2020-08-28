input1 = 2
output1 = 2
// 1. 1 step + 1 step
// 2. 2 steps
input2 =  3
output2 = 3
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

function climbing(num){
    a = []
    for(let i =0; i <= num; i++){
        if( a.length < 2){
            a[i] = 1
        }else{
            a[i] = a[i-1] +a[i-2]
        }   
    }
    return a[num]
}

function climb(num,a=0,b=1){
    if(num === 0){
        // console.log(num)
        console.log(b) 
        return b 
    }
    // console.log(b)
    return climb(num -= 1, b, a+b)
} 

function expect(a,b){
    console.log(a == b)
}

console.log(climb(input1))
// expect(climb(input1),output1)
// expect(climbing(input1),output1)
// expect(climbing(input2),output2)

// 1 , 2 , 3 , 4 , 5   6

// 1   2   3   5   8   13


