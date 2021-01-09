/**
 * https://leetcode.com/problems/image-smoother/
 * Runtime: 136 ms, faster than 93.22% of JavaScript online submissions for Image Smoother.
 * Memory Usage: 46.1 MB, less than 69.49% of JavaScript online submissions for Image Smoother.
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
  //바로 위 부터 시계 방향으로
  const dirArr = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ]

  return M.map((row, i) => {
    return row.map((value, j) => {
      let sum = value
      let count = 1
      dirArr.forEach((dir) => {
        const [dx, dy] = dir
        if (
          i + dx < 0 ||
          i + dx > M.length - 1 ||
          j + dy < 0 ||
          j + dy > row.length - 1
        ) {
          // ignore out of range
        } else {
          sum += M[i + dx][j + dy]
          count++
        }
      })
      return Math.floor(sum / count)
    })
  })
}
