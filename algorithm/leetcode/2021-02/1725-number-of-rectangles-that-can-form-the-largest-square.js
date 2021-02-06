/**
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
 * Runtime: 88 ms, faster than 83.82% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 * Memory Usage: 42.6 MB, less than 22.69% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
 */
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let max = 0
  const squares = rectangles.reduce((accum, rectangle) => {
    const [l, w] = rectangle
    const squareLen = Math.min(l, w)
    max = Math.max(max, squareLen)
    accum.push(squareLen)
    return accum
  }, [])

  return squares.reduce((accum, squareLen) => {
    if (squareLen === max) {
      accum += 1
    }
    return accum
  }, 0)
}
