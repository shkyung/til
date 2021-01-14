/**
 * https://leetcode.com/problems/count-number-of-teams
 * Runtime: 3388 ms, faster than 5.03% of JavaScript online submissions for Count Number of Teams.
 * Memory Usage: 38.8 MB, less than 48.56% of JavaScript online submissions for Count Number of Teams.
 */
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  const len = rating.length
  let count = 0
  let i = 0

  for (i; i < len - 2; i++) {
    let j = i + 1
    for (j; j < len - 1; j++) {
      let k = j + 1
      const isAsc = rating[i] < rating[j]
      for (k; k < len; k++) {
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
