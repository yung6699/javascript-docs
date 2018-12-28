## async와 await

asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다. 

- `await`연산자는 `Promise`를 기다리기 위해 사용됩니다. `async function`내부에서만 사용될 수 있습니다.

- `await` 문은 `async`함수의 실행을 중단시키고, `Promise`가 fulfill되거나 reject되기를 기다리고, 다시 `async`함수를 실행시킵니다. 이때  `await` 문의 값은 `Promise` 에서 fulfill된 값이 됩니다.

```javascript
const _promise = new Promise(function(resolve, reject){
      setTimeout(function() {
          let str = "Promise Success";
          resolve(str);
      }, 2000)
})

_promise.then(function(text) {
   console.log(text); // "Promise Success"
   return "next " + text;
}).then(function(text) {
   console.log(text); // "next Promise Success"
}).catch(function(error) {  
   console.log(error);  // 에러 발생시 처리
})


// 위처럼 길게 then을 계속 쓰는 것 보다 await, async를 사용하는 것도 괜찮다.
const test = function () {
  return _promise.then(function (text) {
    console.log(text); // "Promise Success"
    return "next " + text;
  })
}

const test02 = async function(){
  let temp = await test();
  console.log(temp); //"next Promise Success"
}

test02()
```

<br/>

## 참고

[await, async 참고하기 좋은 사이트](https://medium.com/@constell99/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-async-await-%EA%B0%80-promises%EB%A5%BC-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B2%8C-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8A%94-6%EA%B0%80%EC%A7%80-%EC%9D%B4%EC%9C%A0-c5fe0add656c)

<br/>