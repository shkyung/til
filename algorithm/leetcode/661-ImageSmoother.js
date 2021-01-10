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
  const maxIndexOfM = M.length - 1

  return M.map((row, i) => {
    const maxIndexOfRow = row.length - 1
    return row.map((value, j) => {
      let sum = value
      let count = 1
      dirArr.forEach((dir) => {
        const [dx, dy] = dir
        const x = i + dx
        const y = j + dy
        if (x >= 0 && x <= maxIndexOfM && y >= 0 && y <= maxIndexOfRow) {
          sum += M[x][y]
          count += 1
        }
      })
      return Math.floor(sum / count)
    })
  })
}
