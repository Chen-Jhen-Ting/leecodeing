input1 = [1,2,3,1]
output1 = true

input2 = [1,2,3,4]
output2 = false


input3 = [1,1,1,3,3,4,3,2,4,2]
output3 = true

function anyDuplicate(ary){
    a = ary.filter( (x,index)=> { return ary.indexOf(x) == index})
    
    // console.log(ary.length)
    // console.log(a.length)
    // console.log(ary.length == a.length)
    return (ary.length == a.length)
}

function expect(a,b){
    console.log(a===b)
}
// anyDuplicate(input1)
// anyDuplicate(input2)
// anyDuplicate(input3)
expect(anyDuplicate(input1),output1)
expect(anyDuplicate(input2),output2)
expect(anyDuplicate(input3),output3)

// https://books.halfrost.com/leetcode/ChapterFour/0217.Contains-Duplicate/