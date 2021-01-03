let count = 0
const map = {}

function fibo(x) {
  count++
  if (x === 1 || x === 2) {
    return 1
  }

  if (!map[x]) {
    map[x] = fibo(x - 1) + fibo(x - 2)
  }

  return map[x]
}

const result = fibo(8)
console.error('----result : ', result)
console.error('---- count : ', count)
/*
 * dp map 적용, 재귀, 탑다운방식
 * 01문제의 2의 n제곱에서 O(n)
 * f(4) -> 5
 * f(5) -> 7
 * f(6) -> 9
 * f(7) -> 11
 * f(8) -> 13
 * f(9) -> 15
 * f(10) -> 17
 * f(11) -> 19
 * f(12) -> 21
 * f(13) -> 23
 * f(14) -> 25
 * f(15) -> 27
 * */
