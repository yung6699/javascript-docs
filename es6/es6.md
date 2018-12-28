# ES6

## Table of Contents

- [let과 const](#let과-const)
- [Arrow Function](#arrow-function)
- [Promise](#promise)
- [async와 await](#async와-await)
- [destructuring](#destructuring)

<br/>

## let과 const

\*기존 var를 이용하여 변수를 선언하면 선언한 위치와 상관없이 함수의 맨 위에 있는 것처럼 처리됨 ==> 호이스팅(hoisting)

```javascript
// 개발자가 선언한 방식
function testValue(val){
    if(val){
      var value = "test";
    	return value;
    } else {
        return null;    
    }
} 

// 자바스크립트 엔진 호이스팅 변경
function testValue(val){
    var value;
    if(val){
      value = "test";
    	return value;
    } else {
        return null;    
    }
} 
```

<br/>

### let, const 범위

주어진 블록 스코프 밖에서는 접근할 수 없는 바인딩을 선언하는 것. 많은 C기반 언어들은 블록 스코프로 동작하며, JS에서도 그와 같은 유연성을 제공하려는 의도로 ES6에 도입되었다.

- 함수 내부
- 블록 내부 ( {와 }를 사용하여 지정 )

var는 Function-scope, 유효 범위가 함수 단위. 함수 블록 범위만을 의미

let, const는 Block-scope 이다. 유효 범위가 블록, 즉 {}로 감싸지는 모든 범위를 뜻한다.

```javascript
var test = 'test1';
console.log(test); // test1
 
if (true) {
  var test = 'test2';
  console.log(test); // test2
}
 
console.log(test); // test2
```

```javascript
let test = 'test1';
console.log(test); // test1
 
if (true) {
  let test = 'test2';
  console.log(test); // test2
}
 
console.log(test); // test1
```

<br/>

**지역변수, 전역 변수**

```javascript
/*
변수가 호출되었을 때 블록 안에 같은 이름의 변수가 없으면 상위 블록에서 
선언된 같은 이름의 변수를 호출 
 */

let test = 'test1';
console.log(test); // test1

if (true) {
  console.log(test) // test1
  test = 'test2';
  console.log(test) // test2
}

console.log(test); // test2
```

```javascript
/*
블록 안에 let이나 const로 변수 선언이 있었다면 그 이름의 변수는 변수가 선언되기 이전까지 그 블록안에서는 정의되지 않은 변수로 간주
 */

let test = 'test1';
console.log(test); // bar1
 
if (true) {
  console.log(test);
  // Uncaught ReferenceError: test is not defined
  let test = 'test2';
}
 
console.log(test);
```

\* 전역 스코프에서 let, const는 var와는 다르게 동작한다.  만약 var를 전역 스코프에서 사용하면 전역 객체(브라우저에서는 window 객체)의 프로퍼티로 새로운 전역 변수를 생성한다. 이는 뜻하지 않게 var를 사용하여 전역 변수를 덮어쓸 수도 있다는 의미이다.

```javascript
var test1 = "test";
console.log(window.test1) // test

let test2 = "test2"
console.log(window.test2) // undefined
```

\* 만약 전역 스코프에 var 대신 let, const를 사용하면, 새로운 바인딩이 전역 스코프에 생성되지만 전역 객체의 프로퍼피로 추가 되지는 않는다. 이는 let이나 const로는 전역 변수를 덮어쓸 수 없으며, 일시적으로 전역 스코프의 전역 변수 프로퍼티 대신 사용한다는 의미이다.

<br/>

### 똑같은 식별자 사용 불가

\* 똑같은 식별자를 정의할 수 없다.  
\* var로 선언 시에는 가능했지만 let과 const을 사용하면 똑같은 변수명 선언이 불가능하다.

```javascript
var test = 'test1';
var test = 'test2';

let test = 'test1';
let test = 'test2'; // SyntaxError: Identifier 'test' has already been declared
```

<br/>

### let, const 사용
- let은 값의 변형이 일어나는 원시형 변수에 사용한다.
- const에 한번 값을 할당하면 재할당이 불가능하다. 변경이 불가능
- const는 상수 또는 참조형(array, object, function)에 사용한다.

> 블록 바인딩의 가장 좋은 사용법은 기본적으로 const를 사용하고 변수 값을 변경할 때만 let를 사용한다. 이렇게 하면 코드의 기본 수준의 불변성을 보장하고, 특정 타입 에러를 예방한다. const는 상수 뿐만 아니라 배열, 객체 선언시에도 사용한다.

<br/>

## 참고

[http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads](http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads])

<br/>
<hr/>

## Arrow Function

### 특징

- new 사용 불가
- 프로토타입이 없다. new를 사용할 수 없기 때문에 프로토타입이 필요없다. prototype 프로퍼티가 없다.
- 화살표 함수 호출시 this, argument가 바인딩 되지 않는다.
- arguments 바인딩 안됨 : 화살표 함수는 arguments 바인딩이 없기 때문에 함수 인자에 접근하기 위해서는 명시한 매개변수와 나머지 매개변수(...test)에 의존해야한다.
- 같은 이름의 매개변수를 중복하여 사용할 수 없음
- 화살표 함수는 자신을 포함하는 외부 scope의 this를 받는다. 즉 화살표 함수는 자신만의 this를 바인딩 받지 않는다.  
- (lexical this) 자기보다 상위 스코프의 this를 쓴다.


```javascript
global.name = "yoon"  // node.js에서는 전역객체가 global이다.
exports.name ="wow"

// 브라우저면 window, node면 module.exports or exports가 this이다.
// 자신을 감싸는 범위의 this를 이어받는다.
const func01 = () => console.log(this.name); 


// 화살표 함수를 감싸는 외부의 함수가 호출되면서 this가 바인딩됨 (부모 컨텍스트)
// 그 후 내부에 있는 화살표 함수(자식 컨텍스트)가 상위컨텍스트에 있는 this를 사용할 수 있게 됨
const func02 = function() { 
  (() => console.log(this.name))();
}

func01() // wow
func02() // yoon
```

> Arrow function은 호출해도 this가 바인딩 되지 않는다.  
>
> 해당 function을 정의한 영역의 this를 가져온다. 한 단계 더 위의 element를 가리키는 것이다. 그렇기 때문에 
> prototype에 함수를 정의할 때 arrow function을 사용할 때 내부적으로 this를 사용하게 되면 객체를 가리키지 않고 
> window 객체를 가리키게 된다. 또한 arrow function은 명식적으로 bind, call로 this를 넣어줘도 이를 무시한다.
>
> 기존 함수와 화살표 함수의 차이의 이유는 this 바인딩이 자바스크립트의 에러의 주요 원인. 
> 함수 내 this 값은 추적하기 어렵고 의도치 않은 동작들을 발생 시켰다. 화살표 함수에서는 이런 혼란스러운 동작이 
> 제거되었다. 
>
> 둘째로, 생성자처럼 사용되거나 그 외 다른 방법으로 수정될 수 있는 기존의 보통 함수와 달리, 하나의 this 값으로 
> 코드가 단순하게 실행되도록 화살표 함수를 제한하면, 자바스크립트 엔젠이 더 쉽게 최적화할 수 있기 때문이다.

<br/>

### 사용하면 안되는 경우

1. 객체에 메소드 선언시

```javascript
const object = {
  name : 'yoon',
  func : () => { console.log(this.name) }
}

object.func()
```

2. prototype에 메소드 할당시

```javascript
function Person(name){
  this.name = name;
}

Person.prototype.print = () => {
  console.log(this.name);
}

var person = new Person("yoon")
person.print() // undefined
```

3. addEventListener에 콜백 함수 사용시

```javascript
//ES5
document.getElementById("todos").addEventListener("click", function() {
    console.log(this); //#todos
});

//ES6
document.getElementById("todos").addEventListener("click", () => {
    console.log(this); //Window
});
```

<br/>

## 참고

[http://poiemaweb.com/es6-arrow-function](http://poiemaweb.com/es6-arrow-function)

[https://jaeyeophan.github.io/2017/04/18/ES6-2-Arrow-function/](https://jaeyeophan.github.io/2017/04/18/ES6-2-Arrow-function/)

<br/>
<hr/>

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

<br/>
<hr/>

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
<hr/>

## 해체 할당 ( destructuring assignment ), 확산 연산자 ( spread operator )
### destructuring

- ES6에 도입된 것으로 객체나 배열을 변수로 `해체`할 수 있다.

``` javascript
/*
  객체 해체시 반드시 변수 이름과 객체의 프로퍼티 이름이 일치 해야한다.
*/

const obj = { b:2, c:3, d:4 };

const { a, b, c } = obj;
a // undefined obj에 a 가 없음
b // 2
c // 3
d // ReferenceError : "d가 정의되지 않음"


// 새로운 변수 이름을 만들고 값을 할당 할 수 있다.
const { b : bar, c : foo } = obj
bar // 2
foo // 3
```

<br/>

```javascript
/*
  배열 해체시는 배열 요소에 대응하는 변수 이름을 마음대로 쓸 수 있다.
  확산 연산자는 새 배열에 할당하는 것
*/

const arr = [ 1, 2, 3, 4, 5 ];

let [ x, y, z ] = arr;
x // 1
y // 2
z // 3


// 값을 무시 할당도 가능하다.
let [ x, , z ] = arr;
x // 1
y // ReferenceError
z // 3


// 확산 연산자 사용
let [ a, b, ...rest ] = [ 1, 2, 3, 4, 5 ];
a // 1
b // 2
rest // [3, 4, 5]


// spread를 사용하여 간편하게 다른 객체 값을 할당이 가능하다.
// 리액트에서 겁나 많이 쓰인다.

const o = {
  a : "I",
  b : "am",
  c : "Javscript"
};


const test = {
  ...o,
  a : "wow"
}
console.log(test); // { a : wow, b : am, c : Javascript }

```
<br/>

## 참고

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

<br/>
<hr/>

## 매개변수 (argument parameter) 해체, 기본값

```javascript
// 객체로 전달
function getObjectSentence({a, b, c}){
  return `${a} ${b} ${c}`;
}

const o = {
  a : "I",
  b : "am",
  c : "Javscript"
};

getObjectSentence(o) // "I am Javascript"


// 배열로 전달
function getArraySentence([a, b, c]){
  return `${a} ${b} ${c}`;
}

const arr = ["I","am","Javascript"];
getArraySentence(arr) // "I am Javascript"


// 확산 연산자를 사용하여 매개변수 할당시 확산 연산자는 반드시 마지막 매개변수여야 함.
function addPrefix(prefix, ...words){
  return `${prefix} ${words[0]} ${words[1]}`
}

addPrefix("I","am","Javascript"); //"I am Javascript"
```

- 매개변수 기본값 ( default value )

```javascript
function getObjectSentence({ a, b, c ="Java"}){
  return `${a} ${b} ${c}`;
}

const o = {
  a : "I",
  b : "am"
};

getObjectSentence(o) // "I am Java"
```