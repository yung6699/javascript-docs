# 해체 할당 ( destructuring assignment ), 

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