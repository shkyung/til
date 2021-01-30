/**
 * https://leetcode.com/problems/decode-xored-array
 * Runtime: 104 ms, faster than 99.44% of JavaScript online submissions for Decode XORed Array.
 * Memory Usage: 45.4 MB, less than 26.67% of JavaScript online submissions for Decode XORed Array.
 */
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  return encoded.reduce(
    (accum, val, i) => {
      accum.push(val ^ accum[i])
      return accum
    },
    [first]
  )
}
