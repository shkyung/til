/**
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position
 * Runtime: 76 ms, faster than 80.73% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
 * Memory Usage: 38.4 MB, less than 76.04% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
 * */
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  let movingNumOfEven = 0
  let movingNumOfOdd = 0

  position.forEach((position) => {
    if (position % 2 === 0) {
      movingNumOfEven += 1
    } else {
      movingNumOfOdd += 1
    }
  })

  return Math.min(movingNumOfEven, movingNumOfOdd)
}
