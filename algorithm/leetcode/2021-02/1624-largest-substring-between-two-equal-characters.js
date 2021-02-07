/**
 * https://leetcode.com/problems/largest-substring-between-two-equal-characters
 * Runtime: 76 ms, faster than 94.94% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 * Memory Usage: 38.6 MB, less than 84.83% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  return s.split('').reduce((accum, val, i) => {
    const lastIndex = s.lastIndexOf(val)

    if (lastIndex - i - 1 > accum) {
      accum = lastIndex - i - 1
    }
    return accum
  }, -1)
}
