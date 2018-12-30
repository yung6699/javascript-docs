# 함수 (function) 

### 일급
 - 값으로 다룰 수 있다.
 - 변수에 담을 수 있다.
 - 함수의 인자로 사용될 수 있다.
 - 함수의 결과로 사용될 수 있다.

```javascript
  const a = 20;
  const add1 = a => a + 1;
  console.log(add1(a));
```
<br/>    

### 일급 함수
 - 함수를 값으로 다룰 수 있다.
 - 코드를 값으로 다룰 수 있다.
 - 조합성과 추상화의 도구

```javascript
  const add2 = a => a + 2;
  console.log(add2);

  const f = () => () => 1;
  console.log(f());

  const f2 = f();
  console.log((f())());
```
<br/>  

### 고차 함수
 - 함수를 값으로 다루는 함수
 - 함수를 인자로 받아서 실행하는 함수
 - 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)

```javascript
  const apply1 = f => f(1);
  const add2 = a => a + 2;

  console.log(apply1(a => a + 10));
  console.log(apply1(a => a-1));

  const times = (f, n) => {
      let i = -1;
      while (++1 < n) f(i);
  };

  times(console.log, 3);
  times(a => console.log(a + 10), 3);
```
        
<br/>

### 순수 함수
 - 부수 효과가 없고, 같은 인자를 받으면 항상 같은 결과를 리턴하는 함수
 - 언제 어느 시점에 평가해도 항상 동일한 결과를 만드는 함수

메서드가 자신이 가진 내부의 상태에 따라 다른 결과를 만든다면, 순수 함수는 들어온 인자와 상수만 사용하여 항상 동일한 결과를 반복한다.

중요 특성 중 하나는, 바로 외부의 상태를 변경하지 않는다는 점이다. 함수에게 들어온 인자를 포함하여, 외부와 공유되고 있는 값 중 함수가 참조할 수 있는 어떤 값도 변경하지 않는 것을 말한다. 함수가 외부 상태를 변경하면, 외부 상태와 연관이 있는 다른 부분에도 영향이 있고 이것을 부수효과라 한다.

```javascript
/* pure function */
const double = num => (num * 2);
/* impure function */
const operand = 2;
const multiple = num => (num * operand);
```

<br/>

### 부수효과
 - 외부 세상에 변화에게 영향을 받거나 영향을 주는 것 (Side effect)

<br/>

## 참고

- [함수형 자바스크립트 프로그래밍 - 유인동 저](https://book.naver.com/bookdb/book_detail.nhn?bid=12800140)
- [함수형 프로그래밍이란](https://medium.com/korbit-engineering/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%B4%EB%9E%80-e7f7b052411f)
    









