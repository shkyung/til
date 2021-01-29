/**
 * https://leetcode.com/problems/coin-change/
 * Runtime: 132 ms, faster than 52.88% of JavaScript online submissions for Coin Change.
 * Memory Usage: 44.7 MB, less than 28.03% of JavaScript online submissions for Coin Change.
 *
 ** /

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = function (coins, amount) {
  const INVALID_NUMBER = amount + 1
  const d = Array(INVALID_NUMBER)
    .fill(INVALID_NUMBER, 1)
  d[0] = 0

  coins.forEach((coin) => {
    for (let j = coin; j <= amount + 1; j++) {
      if (d[j - coin] !== INVALID_NUMBER) {
        d[j] = Math.min(d[j], d[j - coin] + 1)
      }
    }
  })

  if (d[amount] === INVALID_NUMBER) {
    return -1
  } else {
    return d[amount]
  }
}
