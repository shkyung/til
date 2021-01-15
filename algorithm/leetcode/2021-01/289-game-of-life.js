/**
 * https://leetcode.com/problems/game-of-life
 * Runtime: 80 ms, faster than 63.01% of JavaScript online submissions for Game of Life.
 * Memory Usage: 39 MB, less than 32.45% of JavaScript online submissions for Game of Life.
 * */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const dirs = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1]
  ]
  const rowNum = board.length
  const colNum = board[0].length
  let liveTobe = []
  let deadTobe = []

  board.forEach((list, row) =>
    list.forEach((live, col) => {
      const numOfLive = dirs.reduce((accum, dir) => {
        const [dx, dy] = dir
        const nRow = row + dx
        const nCol = col + dy

        if (nRow >= 0 && nRow < rowNum && nCol >= 0 && nCol < colNum) {
          if (board[nRow][nCol]) {
            accum += 1
          }
        }
        return accum
      }, 0)

      if (live) {
        if (numOfLive < 2 || 3 < numOfLive) {
          deadTobe.push([row, col])
        }
      } else {
        if (numOfLive === 3) {
          liveTobe.push([row, col])
        }
      }
    })
  )
  deadTobe.forEach((die) => {
    const [row, col] = die
    board[row][col] = 0
  })
  liveTobe.forEach((live) => {
    const [row, col] = live
    board[row][col] = 1
  })
}
