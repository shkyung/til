/**
 * https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation
 * Runtime: 408 ms, faster than 31.88% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
 * Memory Usage: 44.4 MB, less than 47.83% of JavaScript online submissions for Prime Number of Set Bits in Binary Representation.
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  //10^6 -> 2진수, 20자리이므로 19까지
  const primeList = [2, 3, 5, 7, 11, 13, 17, 19]
  let numOfPrime = 0

  for (let i = L; i <= R; i++) {
    const binaryStr = i.toString(2)
    let bitNum = 0

    binaryStr.split('').forEach((char) => {
      if (char === '1') {
        bitNum += 1
      }
    })

    if (primeList.includes(bitNum)) {
      numOfPrime += 1
    }
  }
  return numOfPrime
}
