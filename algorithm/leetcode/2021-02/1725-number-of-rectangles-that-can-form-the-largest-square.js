/**
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
 * Runtime: 88 ms, faster than 83.43% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 * Memory Usage: 41.6 MB, less than 57.17% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 */
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let max = 0
  const number = rectangles.reduce((accum, rectangle) => {
    const [l, w] = rectangle
    const squareLen = Math.min(l, w)
    if (squareLen > max) {
      max = squareLen
      accum = 1
    } else if (squareLen === max) {
      accum += 1
    }
    return accum
  }, 0)
  return number
}
