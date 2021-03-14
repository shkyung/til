/**
 * Runtime: 80 ms, faster than 70.59% of JavaScript online submissions for Camelcase Matching.
 * Memory Usage: 39 MB, less than 23.53% of JavaScript online submissions for Camelcase Matching.
 * https://leetcode.com/problems/camelcase-matching
 */
/**
 * @param {string[]} queries
 * @param {string} patter
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const regExpStr = [...pattern].reduce((accum, char) => {
    accum += `${char}[a-z]*`
    return accum
  }, '^[a-z]*')

  const regExp = new RegExp(regExpStr)
  const ret = queries.map((word) => {
    if (regExp.test(word)) {
      const notPatternedCapital = [...word].find(
        (char) => char.toUpperCase() === char && ![...pattern].includes(char)
      )
      if (notPatternedCapital) {
        return false
      }
      return true
    }
    return false
  })
  return ret
}
