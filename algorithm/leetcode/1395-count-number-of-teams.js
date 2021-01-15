/**
 * https://leetcode.com/problems/count-number-of-teams
 *Runtime: 3088 ms, faster than 5.23% of JavaScript online submissions for Count Number of Teams.
 * Memory Usage: 38.9 MB, less than 40.38% of JavaScript online submissions for Count Number of Teams.
 */
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const len = rating.length
  const maxLenForI = len - 2
  const maxLenForJ = len - 1
  let count = 0

  for (let i = 0; i < maxLenForI; i++) {
    for (let j = i + 1; j < maxLenForJ; j++) {
      const isAsc = rating[i] < rating[j]
      for (let k = j + 1; k < len; k++) {
        if (isAsc && rating[j] < rating[k]) {
          count += 1
        } else if (!isAsc && rating[j] > rating[k]) {
          count += 1
        }
      }
    }
  }
  return count
}
