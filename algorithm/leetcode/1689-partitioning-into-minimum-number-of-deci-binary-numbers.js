/***
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers
 * Runtime: 96 ms, faster than 83.74% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
 * Memory Usage: 45.9 MB, less than 50.49% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
 */
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
  const arr = n.split('')
  const length = arr.length
  let max = 0

  for (let i = 0; i < length; i++) {
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
