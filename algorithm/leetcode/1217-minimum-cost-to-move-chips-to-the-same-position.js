/**
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position
 * Runtime: 136 ms, faster than 6.77% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
 * Memory Usage: 40.1 MB, less than 7.29% of JavaScript online submissions for Minimum Cost to Move Chips to The Same Position.
 * */
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  const maxIndex = Math.max(...position)
  const minIndex = Math.min(...position)

  const obj = position.reduce((accum, position) => {
    if (!accum[position]) {
      accum[position] = 0
    }
    accum[position] += 1

    return accum
  }, {})

  let max = 0
  const candidate = []
  let maxPosition = 0

  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      maxPosition = key
    }
  }
  candidate.push(maxPosition)

  for (key in obj) {
    if (key !== maxPosition && obj[key] === max) {
      candidate.push(key)
    }
  }

  candidate.push(Math.floor((maxIndex + minIndex) / 2))

  const costArr = candidate.map((position) => {
    let cost = 0
    for (key in obj) {
      if (key !== position) {
        cost += (Math.abs(+position - +key) % 2) * obj[key]
      }
    }
    return cost
  })

  return Math.min(...costArr)
}
