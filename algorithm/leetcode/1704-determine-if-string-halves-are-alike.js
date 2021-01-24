/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 * Runtime: 80 ms, faster than 86.67% of JavaScript online submissions for Determine if String Halves Are Alike.
 * Memory Usage: 40.2 MB, less than 29.11% of JavaScript online submissions for Determine if String Halves Are Alike.
 * */
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  function _getVowelNumberInArr(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return arr.reduce((accum, value) => {
      if (vowels.indexOf(value.toLowerCase()) >= 0) {
        accum += 1
      }
      return accum
    }, 0)
  }

  const len = s.length
  const a = s.slice(0, len / 2)
  const b = s.slice(len / 2)
  return _getVowelNumberInArr([...a]) === _getVowelNumberInArr([...b])
}
