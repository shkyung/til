/**
 * https://leetcode.com/problems/pascals-triangle-ii
 * Runtime: 80 ms, faster than 56.17% of JavaScript online submissions for Pascal's Triangle II.
 * Memory Usage: 38.5 MB, less than 62.78% of JavaScript online submissions for Pascal's Triangle II.
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const pascalArr = [[1], [1, 1]]

  if (rowIndex > 1) {
    for (let i = 2; i <= rowIndex; i++) {
      const prevArr = pascalArr[i - 1]
      const prevArrLen = prevArr.length
      pascalArr[i] = [1]
      for (let j = 0; j < prevArrLen - 1; j++) {
        pascalArr[i].push(prevArr[j] + prevArr[j + 1])
      }
      pascalArr[i].push(1)
    }
  }
  return pascalArr[rowIndex]
}
