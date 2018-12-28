# let과 const

기존 var를 이용하여 변수를 선언하면 선언한 위치와 상관없이 함수의 맨 위에 있는 것처럼 처리된다.  


```javascript
// 호이스팅(hoisting)
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
