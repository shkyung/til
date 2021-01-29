/**
 * https://leetcode.com/problems/find-and-replace-pattern
 * Runtime: 76 ms, faster than 95.41% of JavaScript online submissions for Find and Replace Pattern.
 * Memory Usage: 41.2 MB, less than 30.28% of JavaScript online submissions for Find and Replace Pattern.
 */
/**
 * @param {string[]} word
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  function _getTransformedString(str) {
    const map = {}
    let count = 0

    const transformedStr = [...str]
      .map((spell) => {
        if (!map[spell]) {
          count += 1
          map[spell] = String(count)
        }

        return map[spell]
      })
      .join('')
    return transformedStr
  }

  const transformedPattern = _getTransformedString(pattern)

  const ret = words.reduce((accum, word) => {
    const transformedWord = _getTransformedString(word)

    if (transformedWord === transformedPattern) {
      accum.push(word)
    }
    return accum
  }, [])

  return ret
}
