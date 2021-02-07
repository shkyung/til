/**
 * https://leetcode.com/problems/xor-operation-in-an-array
 * Runtime: 72 ms, faster than 94.26% of JavaScript online submissions for XOR Operation in an Array.
 * Memory Usage: 38.6 MB, less than 45.41% of JavaScript online submissions for XOR Operation in an Array.
 */
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ret = null
  for (let i = 0; i < n; i++) {
    const num = start + 2 * i
    if (ret == null) {
      ret = num
    } else {
      ret ^= num
    }
  }
  return ret
}
