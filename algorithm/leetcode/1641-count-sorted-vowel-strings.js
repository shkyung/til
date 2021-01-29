/**
 * https://leetcode.com/problems/count-sorted-vowel-strings
 * Runtime: 72 ms, faster than 96.92% of JavaScript online submissions for Count Sorted Vowel Strings.
 * Memory Usage: 38.5 MB, less than 51.65% of JavaScript online submissions for Count Sorted Vowel Strings.
 */
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let numOfPrefixA = 1
  let numOfPrefixE = 1
  let numOfPrefixI = 1
  let numOfPrefixO = 1
  let numOfPrefixU = 1

  if (n !== 1) {
    let i = 2
    while (i <= n) {
      numOfPrefixA = numOfPrefixA + numOfPrefixE + numOfPrefixI + numOfPrefixO + numOfPrefixU
      numOfPrefixE = numOfPrefixE + numOfPrefixI + numOfPrefixO + numOfPrefixU
      numOfPrefixI = numOfPrefixI + numOfPrefixO + numOfPrefixU
      numOfPrefixO = numOfPrefixO + numOfPrefixU
      numOfPrefixU = numOfPrefixU
      i++
    }
  }
  return numOfPrefixA + numOfPrefixE + numOfPrefixI + numOfPrefixO + numOfPrefixU
}