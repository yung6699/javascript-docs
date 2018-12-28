## Promise

- 비동기 처리를 위한 Promise 에 대해 정리

- Promise 와 더불어 사용하는 async await 까지 정리

<br/>

### 1. Promise 개념

- Promise 는 콜백 패턴 즉 콜백 지옥의 단점을 해결하기 위해 만들어진 패턴이다. 

- Promise 는 콜백을 예측 가능한 패턴으로 사용할 수 있게 한다.

- Promise 를 사용하면 비동기 작업을 처리하는 핸들링이 수월하며 가독성 또한 좋다. 

- 내부에 예외처리를 선언하여 오류 발생 시 처리에 유용하다.

<br/>

### 2. Promise 선언 및 처리

- Promise 기반 비동기 함수를 호출하면 그 함수는 Promise 인스턴스를 반환

- Promise의 상태는 `성공(fulfilled)`, `실패(rejected)`, `대기중(pending)` 3가지다.

- Promise가 성공 or 실패하면 `결정됐다(settled)`라고 한다.

<br/> 

  __# Promise return__

```javascript
const _promise = function(param) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (param) {
                let str = "Promise Success";
                resolve(str); // 성공시 파라미터 값을 then의 첫번째 콜백 함수의 인자로 전달한다.
            } else {
                reject(Error("실패!")); // 실패시 파라미터 값을 전달한다.
            }
        }, 2000)
    })
}

console.log(_promise(true)); // Promise { <pending> } 아직 수행 중인 상태를 의미

_promise(true)
 .then(function(text) {
     console.log(text); // "Promise Success"
     return "next " + text;
 }).then(function(text) {
     console.log(text); // "next Promise Success"
 }).catch(function(error) {  
     console.log(error);  // 에러 발생시 처리
 })
```

<br/>

  __# new Promise 할당__

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
```

<br/>

### 3. Promise 처리도

![Promise 처리 구조도](https://mdn.mozillademos.org/files/8633/promises.png)

\* 출처 :  [MDN web docs Promise 설명 부분 이미지](https://developer.mozilla.org/ko-KR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<br/>

### 4. 여러 Promise가 모두 완료될 때 까지 작업하기

- `Promise.all()` 활용
- [MDN web docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
<br/><br/>

__* new Promise 방식__

```javascript
const p1 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 5000, "one"); 
}); 

const p2 = new Promise((resolve, reject) => { 
  setTimeout(resolve, 2000, "two"); 
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});

Promise.all([p1, p2, p3]).then((value) => { 
  console.log(value);  //['one', 'two', 'three']
}, function(reason) {
  console.log(reason)
});
```

<br/>

  __* return 방식__

```javascript
const p1 = function(){
  return new Promise((resolve, reject) => { 
      setTimeout(resolve, 5000, "one"); 
  }); 
}

const p2 = function(){
  return new Promise((resolve, reject) => { 
     setTimeout(resolve, 2000, "two"); 
  }); 
}

const p3 = function(){
  return new Promise((resolve, reject) => { 
     setTimeout(resolve, 3000, "three");
  }); 
}

Promise.all([p1(), p2(), p3()]).then((value) => { 
  console.log(value);  //['one', 'two', 'three']
}, function(reason) {
  console.log(reason)
});
```
<br/>

## 참고
[https://joshua1988.github.io/web-development/javascript/promise-for-beginners/](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

