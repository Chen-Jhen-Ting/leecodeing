nums1 = [1,2,3,0,0,0] 
nums2 = [2,5,6]  
Output= [1,2,2,3,5,6]

function mergeArray (ary1,ary2){
    if (ary1.length - ary2.length === ary1.filter(x => x === 0 ).length){
        const result = ary1.filter(x => x != 0).concat(ary2).sort()
        return result
    }
}
function expect(a,b){
    console.log(JSON.stringify(a) === JSON.stringify(b))   
}
expect(mergeArray(nums1,nums2),Output)
