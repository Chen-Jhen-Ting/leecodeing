input = [
  [2],
 [3,4],
[6,5,7],
[4,1,8,3]
]
output = 11

function lowPath(ary){
 y = ary.length
 total = []
 total[0] = ary[0][0] //每種走法的加總都要記錄
  for(let i=1; i < y; i++){   //從頂至下，因為ary[0][0]已經加入total所以從 1 開始
   
    for(let j=i; j >=0; j--){  // 把每一層的數字都要拿出來用，下一層的數字剛好與層數相等 ex 第一層 [0,1]
      if(j == 0) {
        total[j] = total[j] + ary[i][j];
      } else {
        total[j] = Math.min(total[j - 1], total[j]) + ary[i][j];
      }
    }
    for(let i = 0; i < row; i++) {
      minTotal = min(minTotal, total[i]);
    }
    return minTotal;
  }
}

function expect(a,b){
 console.log(a==b)
}

expect(lowPath(input),output)