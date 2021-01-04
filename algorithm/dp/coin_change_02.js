/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
let d

const coinChange = function (coins, amount) {
  d = Array(amount + 1)
    .fill()
    .map(() => amount + 1)
  d[0] = 0

  coins.forEach((coin) => {
    for (let j = coin; j <= amount + 1; j++) {
      if (d[j - coin] != amount + 1) {
        d[j] = Math.min(d[j], d[j - coin] + 1)
      }
    }
  })

  if (d[amount] == amount + 1) {
    return -1
  } else {
    return d[amount]
  }
}
