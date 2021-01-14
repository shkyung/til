/***
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/
 * Runtime: 92 ms, faster than 89.80% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
 * Memory Usage: 45.7 MB, less than 51.02% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
 */
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const arr = ('' + n).split('')
  let i = 0
  let length = arr.length
  let max = 0

  for (i; i < length; i++) {
    const int = parseInt(arr[i])
    if (int > max) {
      max = int
    }
    if (max === 9) {
      break
    }
  }
  return max
}
