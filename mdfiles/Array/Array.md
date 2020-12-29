# Array

reference: <https://devdocs.io/javascript/global_objects/array>

**push & pop**

- 배열의 뒤에서 추가,삭제

**unshift & shift**

- 배열의 앞에서 추가,삭제

**slice & splice**

- 배열의 특정 원소를 추출할 수 있다.
- 하지만 배열 원본에 영향이 가느냐 안가느냐의 차이다.

```js
var fruits = ['Strawberry', 'Banana', 'Mango']
fruits.slice(1, 2)
// ["Banana"]
// fruits = ["Strawberry", "Banana", "Mango"]

var removedItem = fruits.splice(1, 1) // this is how to remove an item
// ["Banana"]
// fruits = ["Strawberry", "Mango"]
```

**Array.from()**

- 유사배열 객체를 array로 만들어 반환하여 array처럼 사용. 단 얉은 복사.
- getElementByClassName 등의 요소를 가지고 올때 등등에 유용하게 쓰일 듯?
- 기존의 apply, call 방법보다 더 간편하다고 함.

```js
const m = new Map([
  [1, 2],
  [2, 4],
  [4, 8]
])
m.values()
//MapIterator {2, 4, 8}
m.keys()
//MapIterator {1, 2, 4}
Array.from(m.keys())
//(3) [1, 2, 4]
Array.from(m.values())
//(3) [2, 4, 8]
Array.isArray(m.values())
//false
Array.isArray(Array.from(m.values()))
//true
```

## **Array.reduce()**

`arr.reduce(callback[,initialValue])`

- reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
- initialValue를 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뜁니다. initialValue를 제공하면 인덱스 0에서 시작합니다.
  - initialvalue가 없다 -> initialValue = 0 인 것처럼 작동

**활용**

1. 값 합산

```js
var total = [0, 1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
)
```

2. 중첩 배열 펼치기

```js
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue)
}, [])
```

3. 객체 내의 값 인스턴스 개수 세기

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  } else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

4. 배열의 중복 항목 제거
5. 프로미스의 순차적 실행

- Promise.all()은 순서를 보장하지 않음.

```js
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

const promiseArr = [p1, p2, p3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log) // 1200
```

6. 그외..
