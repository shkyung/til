/**
 * https://leetcode.com/problems/fair-candy-swap
 * Runtime: 484 ms, faster than 28.90% of JavaScript online submissions for Fair Candy Swap.
 * Memory Usage: 43.1 MB, less than 95.95% of JavaScript online submissions for Fair Candy Swap.
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
  const sumOfA = getSumInArr(A)
  const sumOfB = getSumInArr(B)
  const lengthA = A.length
  const lengthB = B.length

  for (let i = 0; i < lengthA; i++) {
    const targetA = A[i]

    for (let j = 0; j < lengthB; j++) {
      const targetB = B[j]

      if (sumOfA - targetA + targetB === sumOfB - targetB + targetA) {
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
