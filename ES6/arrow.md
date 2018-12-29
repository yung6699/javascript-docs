# Arrow Function

### 특징

- new 사용 불가
- 프로토타입이 없다. new를 사용할 수 없기 때문에 프로토타입이 필요없다. prototype 프로퍼티가 없다.
- 화살표 함수 호출시 this, argument가 바인딩 되지 않는다.
- arguments 바인딩 안됨 : 화살표 함수는 arguments 바인딩이 없기 때문에 함수 인자에 접근하기 위해서는 명시한 매개변수와 나머지 매개변수(...test)에 의존해야한다.
- 같은 이름의 매개변수를 중복하여 사용할 수 없음
- (lexical this) 자기보다 상위 스코프의 this를 쓴다.

**화살표 함수는 this 바인딩과 연계될 때 일반 함수처럼 작동하지 않는다. 화살표 함수는 모든 this 바인딩에 대한 일반 규칙을 폐기하고, 대신 자신 가까이 둘러싼 렉시컬 스코프에서 this 값을 받아온다.**

<br/>


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

https://hanjungv.github.io/2018-02-03-1_JS_arrow_function/

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

[https://beomi.github.io/2017/07/12/understanding_js_scope_function_vs_arrow/](https://beomi.github.io/2017/07/12/understanding_js_scope_function_vs_arrow/)

