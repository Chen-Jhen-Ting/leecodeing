# 1: [0,0] -> [0,2]
# 2: [0,1] -> [1,2]
# 3: [0,2] -> [2,2]

# 4: [1,0] -> [0,1]
# 5: [1,1] -> [1,1]
# 6: [1,2] -> [2,1]

# 7: [2,0] -> [0,0]
# 8: [2,1] -> [1,0]
# 9: [2,2] -> [2,0]

# [2,0] <-> [2,2]
# [2,2] <-> [0,2]
# [0,2] <-> [0,0]

# [
#   [1,2,3],
#   [4,5,6],
#   [7,8,9]
# ]

# [0,0], [2,0], [2,2], [0,2]
# [i,j], [max-j, i], [max-i, max-j], [j, max-i]
# [1,0], [2,1], [1,2], [0,1]

require 'ostruct'

matrix_small = [
  [1,2],
  [3,4]
]

result_small = [
  [3,1],
  [4,2]
]


matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

result = [
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

matrix_big = [
  [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9,10,11,12],
  [13,14,15,16]
]

result_big = [
  [13, 9, 5, 1],
  [14,10, 6, 2],
  [15,11, 7, 3],
  [16,12, 8, 4]
]

def rotate90(matrix)
  min = 0
  matrix_max = max = matrix.size - 1
  i = max
  j = min
  turn = 0

  turn_actions = [
    OpenStruct.new(cond: -> { j == max }, then: -> { turn += 1; i -= 1 }, else: -> { j += 1 }),
    OpenStruct.new(cond: -> { i == min }, then: -> { turn += 1; j -= 1 }, else: -> { i -= 1 }),
    OpenStruct.new(cond: -> { true }, then: -> { j -= 1 })
  ]

  while min < max
    matrix[i][j], matrix[j][matrix_max - i] = matrix[j][matrix_max - i], matrix[i][j]

    if turn_actions[turn].cond.()
      turn_actions[turn].then.()
    else
      turn_actions[turn]&.else.()
    end
    # case turn
    # when 0
    #   if j == max
    #     turn += 1
    #     i -= 1
    #   else
    #     j += 1
    #   end
    # when 1
    #   if i == min
    #     turn += 1
    #     j -= 1
    #   else
    #     i -= 1
    #   end
    # when 2
    #   j -= 1
    # end

    if j == min
      min += 1
      max -= 1
      i = max
      j = min
      turn = 0
    end
  end

  matrix
end


expect = -> (a, b) do
  p rs = rotate90(a)
  rs == b
end.curry

expect.(matrix_big).(result_big)
expect.(matrix_small).(result_small)
expect.(matrix).(result)
