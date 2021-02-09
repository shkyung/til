/**
 * https://leetcode.com/problems/xor-operation-in-an-array
 * Runtime: 76 ms, faster than 80.03% of JavaScript online submissions for XOR Operation in an Array.
 * Memory Usage: 38.4 MB, less than 59.42% of JavaScript online submissions for XOR Operation in an Array.
 */
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let prev = start
  let ret = prev
  for (let i = 1; i < n; i++) {
    prev += 2
    ret ^= prev
  }
  return ret
}
