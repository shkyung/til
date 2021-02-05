/**
 * https://leetcode.com/problems/sequential-digits
 * Runtime: 64 ms, faster than 100.00% of JavaScript online submissions for Sequential Digits.
 * Memory Usage: 38.5 MB, less than 58.97% of JavaScript online submissions for Sequential Digits.
 */
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const lowNum = low.toString().length
  const highNum = high.toString().length
  const ret = []

  for (let i = lowNum; i <= highNum; i++) {
    for (let j = 1; j <= 9 - i + 1; j++) {
      let seq = ''
      for (let k = j; k < j + i; k++) {
        seq += k
      }
      const seqNum = Number(seq)
      if (low <= seqNum && seqNum <= high) {
        ret.push(seqNum)
      }
    }
  }

  return ret
}
