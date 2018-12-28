# function 

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
        

### 부수효과
 - 외부 세상에 변화에게 영향을 받거나 영향을 주는 것 (Side effect)

### 순수 함수
 - 부수 효과가 없고, 같은 인자를 받으면 항상 같은 결과를 리턴하는 함수
 - 언제 어느 시점에 평가해도 항상 동일한 결과를 만드는 함수

```javascript
  const estimatee = ['est1', 'est2'];
  const addA = (b) => a + b;

  log(addA(1));
  a = 10;
  log(addA(1));

  const c = (a) => a + 1;
    
```
    









