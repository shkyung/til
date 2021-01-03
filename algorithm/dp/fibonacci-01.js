let count = 0

function fibo(x) {
  count++
  if (x === 1 || x === 2) {
    return 1
  }
  return fibo(x - 1) + fibo(x - 2)
}

const result = fibo(4)
console.error('----result : ', result)
/*
 * 문제점 - fibo함수의 파라미터를 1씩 증가시키면 count의 숫자가 기하급수적으로 늘어남
 * f(4) -> 5
 * f(5) -> 9
 * f(6) -> 15
 * f(7) -> 25
 * f(8) -> 41
 * f(9) -> 67
 * f(10) -> 109
 * f(11) -> 177
 * f(12) -> 287
 * f(13) -> 465
 * f(14) -> 753
 * f(15) -> 1219
 *  why? 중복 함수호출이 많다.
 * */
console.error('---- count : ', count)
