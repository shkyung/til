/**
 * https://leetcode.com/problems/pascals-triangle-ii
 * Runtime: 80 ms, faster than 56.17% of JavaScript online submissions for Pascal's Triangle II.
 * Memory Usage: 38.5 MB, less than 62.78% of JavaScript online submissions for Pascal's Triangle II.
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const rowMap = new Map()
rowMap.set(0, [1])
rowMap.set(1, [1, 1])

// version 1
var getRow = function (rowIndex) {
  if (rowMap.has(rowIndex)) {
    return rowMap.get(rowIndex)
  }
  const prevArr = getRow(rowIndex - 1)
  const curArr = new Array(rowIndex + 1)
  curArr[0] = 1
  curArr[rowIndex] = 1
  const condition = prevArr.length - 1
  for (let j = 0; j < condition; j++) {
    curArr[j + 1] = prevArr[j] + prevArr[j + 1]
  }
  rowMap.set(rowIndex, curArr)

  return curArr
}

// version2
var getRow2 = function (rowIndex) {
  if (rowMap.has(rowIndex)) {
    return rowMap.get(rowIndex)
  }
  const prevArr = getRow(rowIndex - 1)
  const curArr = Array.from({ length: rowIndex + 1 })
  curArr[0] = 1
  curArr[rowIndex] = 1
  const condition = prevArr.length - 1
  for (let j = 0; j < condition; j++) {
    curArr[j + 1] = prevArr[j] + prevArr[j + 1]
  }
  rowMap.set(rowIndex, curArr)

  return curArr
}

// version3
var getRow = function (rowIndex) {
  if (rowMap.has(rowIndex)) {
    return rowMap.get(rowIndex)
  }
  const prevArr = getRow(rowIndex - 1)
  const curArr = [1]
  const condition = prevArr.length - 1
  for (let j = 0; j < condition; j++) {
    curArr.push(prevArr[j] + prevArr[j + 1])
  }
  curArr.push(1)
  rowMap.set(rowIndex, curArr)

  return curArr
}
