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
var fruits = ["Strawberry", "Banana", "Mango"]
fruits.slice(1,2)
// ["Banana"]
// fruits = ["Strawberry", "Banana", "Mango"]

var removedItem = fruits.splice(1, 1); // this is how to remove an item
// ["Banana"]                                      
// fruits = ["Strawberry", "Mango"]
```

**Array.from()**  
- 유사배열 객체를 array로 만들어 반환하여 array처럼 사용. 단 얉은 복사.
- getElementByClassName 등의 요소를 가지고 올때 등등에 유용하게 쓰일 듯?
- 기존의 apply, call 방법보다 더 간편하다고 함.
