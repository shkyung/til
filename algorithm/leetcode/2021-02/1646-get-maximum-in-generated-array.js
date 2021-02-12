/**
 * https://leetcode.com/problems/get-maximum-in-generated-array
 * Runtime: 72 ms, faster than 94.42% of JavaScript online submissions for Get Maximum in Generated Array.
 * Memory Usage: 38.6 MB, less than 70.73% of JavaScript online submissions for Get Maximum in Generated Array.
 */
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n <= 1) {
    return n
  }
  const arr = [0, 1]
  let max = 1

  for (let i = 2; i <= n; i++) {
    const quotient = ~~(i / 2)
    let numI
    if (i % 2 === 0) {
      numI = arr[quotient]
    } else {
      numI = arr[quotient] + arr[quotient + 1]
    }
    if (numI > max) {
      max = numI
    }
    arr[i] = numI
  }
  return max
}
