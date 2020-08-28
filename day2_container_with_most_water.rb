# 题目大意 #
# 给出一个非负整数数组 a1，a2，a3，…… an，每个整数标识一个竖立在坐标轴 x 位置的一堵高度为 ai 的墙，选择两堵墙，和 x 轴构成的容器可以容纳最多的水。

Input= [1,8,6,2,5,4,8,3,7]
Output= 49
def max_water_volumn(input)
    start = 0
    bottom = input.length-1
    higher_volumn = 0

    for i in [*start..bottom]
        new = start + 1
        
        for j in [*new..bottom]
            height = [input[i],input[j]].min
            length =  (j-i).abs
            now_volumn = length*height

            if higher_volumn <=  now_volumn
                higher_volumn = now_volumn
            end
        end 
    end
    higher_volumn
end 
p max_water_volumn(Input)