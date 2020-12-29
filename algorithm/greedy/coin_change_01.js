/**
 * https://leetcode.com/problems/coin-change/
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//wrong cases
//[186,419,83,408]
// 6249

//[2],3
const coinChange = function (coins, amount) {
  let count = 0
  coins
    .sort((a, b) => b - a)
    .forEach((coin) => {
      count += (amount / coin) >> 0 // or ~~(money / coin)
      console.log(`coin ${coin}, count: ${count}`)
      amount %= coin
    })

  return count
}
