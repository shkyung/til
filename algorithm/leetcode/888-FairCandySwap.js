/**
 * https://leetcode.com/problems/fair-candy-swap
 * Time Limit exceeded (not passed yet)
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
  let isFound = false
  let exchangeA = 0
  let exchangeB = 0

  for (let i = 0; i < A.length; i++) {
    const targetA = A[i]
    for (let j = 0; j < B.length; i++) {
      const targetB = B[j]
      const newA = [...A]
      const newB = [...B]
      newA[i] = targetB
      newB[j] = targetA

      if (getSumInArr(newA) === getSumInArr(newB)) {
        isFound = true
        exchangeA = targetA
        exchangeB = targetB
        break
      }
    }
    if (isFound) {
      break
    }
  }
  return [exchangeA, exchangeB]
}

function getSumInArr(arr) {
  return arr.reduce((accum, val) => accum + val, 0)
}
