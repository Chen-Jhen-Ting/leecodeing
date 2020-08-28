nums1 = [1,2,3,1]
k1 = 3
output1= true

nums2 = [1,0,1,1]
k2 = 1
output2= true

nums3 = [1,2,3,1,2,3]
k3 = 2
output3= false

// ary[i] = ary[i+3]
function duplicate(ary,k){
    let a = ary.filter( (x,index)=> { return ary.indexOf(x) == index})
    if (ary.length == a.length){
        return false
    }
    let start = 0
    let range = 0
    while(start < ary.length){
        if(k-range != 0){     
            if(ary[start] === ary[k-range]){
                return true
            }else{
                range +=1
            }
        }else{
            range = 0
            start +=1
        }
    }
    return false
} 

function expect(a,b){
    console.log(a==b)
}
expect(duplicate(nums1,k1),output1)
expect(duplicate(nums2,k2),output2)
expect(duplicate(nums3,k3),output3)


