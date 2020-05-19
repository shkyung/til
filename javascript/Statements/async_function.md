# async function
reference: <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function>

###Description
- async function은 AsyncFunction 객체를 반환하는 하나의 비동기 함수를 정의한다.
- 비동기 함수는 스크립트 코드가 구동되는 환경의 **이벤트루프**를 통해 비동기적으로 작동하는 함수이다.  
_추후 자바스크립트 엔진과 이벤트루프도 정리를 해야겠다._ https://meetup.toast.com/posts/89
- **await** 를 사용할 수 있다. 함수앞에 await를 쓰면 해당 함수의 반환값이 전달될때까지 기다린 후 이후 statements를 실행한다.
###Return value 
- Promise : async 함수에 의해 반환 된 값으로 해결되거나 async함수 내에서 발생하는 캐치되지 않는 예외로 거부되는 값.
###Examples
```js
    const resolveAfter2Seconds = function() {
        console.log("starting slow promise");
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(20);
                console.log("slow promise is done");
            }, 2000);
        });
    };

    const resolveAfter1Second = function() {
        console.log("starting fast promise");
        return new Promise(resolve => {
            setTimeout(function() {
                resolve(10);
                console.log("fast promise is done");
            }, 1000);
        });
    };

    const sequentialStart = async function () {
        console.log('==SEQUENTIAL START==');

        // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
        const slow = await resolveAfter2Seconds();
        console.log(slow);

        const fast = await resolveAfter1Second();
        console.log(fast);
    }

    const concurrentStart = async function () {
        console.log('==CONCURRENT START with await==');
        const slow = resolveAfter2Seconds(); // starts timer immediately
        const fast = resolveAfter1Second();

        console.log(await slow);
        console.log(await fast); // waits for slow to finish, even though fast is already done!
    }

    const stillConcurrent = function () {
        console.log('==CONCURRENT START with Promise.all==');
        Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
            console.log(messages[0]); // slow
            console.log(messages[1]); // fast
        });
    }

    const parallel = function () {
        console.log('==PARALLEL with Promise.then==');
        resolveAfter2Seconds().then((message) => console.log(message));
        resolveAfter1Second().then((message) => console.log(message));
    }

    sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
    /*
    * result:
    * ==SEQUENTIAL START==
    * starting slow promise
    * slow promise is done
    * 20
    * starting fast promise
    * fast promise is done
    * 10
    * */
    // wait above to finish
    setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
    /*
    * result:
    * ==CONCURRENT START with await==
    * starting slow promise
    * starting fast promise
    * fast promise is done
    * slow promise is done
    * 20
    * 10
    * */
    // wait again
    setTimeout(stillConcurrent, 7000); // same as concurrentStart
    /*
    * result:
    * ==CONCURRENT START with Promise.all==
    * starting slow promise
    * starting fast promise
    * fast promise is done
    * slow promise is done
    * 20
    * 10
    * */
    // wait again
    setTimeout(parallel, 10000); // trully parallel: after 1 second, logs "fast", then after 1 more second, "slow"
    /*
    * result:
    * ==PARALLEL with Promise.then==
    * starting slow promise
    * starting fast promise
    * fast promise is done
    * 10
    * slow promise is done
    * 20
    * */
```