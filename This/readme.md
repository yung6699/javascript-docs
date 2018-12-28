# this

JS에서 모든 함수는 실행 될 때 마다 함수 내부에 this라는 객체가 추가된다. arguments 객체 및 this 인자가 함수 내부로 암묵적으로 전달된다. this를 이애하기 어려운 이유는 여러가지 함수가 호출되는 방식 (호출 패턴) 에 따라 this가 다른 객체를 참조 **(this 바인딩)** 하기 때문이다.

함수 호출 시, 객체 안 메소드 호출시,  생성자, apply, call, bind를 활용한 this 제어 시 this가 다르다.


**ES5에서 this 결정되는 세 가지 조건**

- 생성자 내에서  
생성자 함수를 new라는 키워드를 통해 호출하면 내부에서 this는 인스턴스 그 자체를 가리킨다.  
생성자 함수 내부에서 return this;가 생략되어 있기 때문이다.

- 함수 내에서  
this는 생략된 매개 변수이다. 무엇이 함수를 호출했는가가 this를 결정한다.

- bind, apply, call method or proxy method of jQuery  
this는 메소드로 바꿔준 대상을 가리키게 된다. 

<br/>

### 1. 함수 호출할 때 this 바인딩

특정 객체의 메서드가 아닌 함수를 호출하면 해당 함수 내부 코드에서 사용된 this는 전역 객체에 바인딩 된다.

```javascript
var test = "test string";
console.log(global.test) // test string
                         // 브라우저 실행시에는 window , node.js는 global이다.
function thisFunc(){
  console.log(this.test);            
}

thisFunc() // test string
```

<br/>

### 2. 객체 안 메소드 호출할 때 this 바인딩

객체의 프로퍼티가 함수일 경우, 이 함수를 메서드라고 부른다.  
메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩된다.

```javascript
var myObject = {
  name : 'foo'
  func : function(){
    console.log(this.name);
  }  
}

var otherObject = {
  name : 'bar'
}

otherObject.func = myObject.func;

myObject.func(); // foo
otherObject.func() // bar
```

<br/>

### 3. 생성자 함수 사용시

new 키워드를 통해 생성자 함수를 호출할 때는 또 this가 다르게 바인딩 된다. new 키워드를 통해 호출된 함수 내부에서의 this는 객체 자신이 된다.

new 연산자를 통해 함수를 생성자로 호출하면 일단 빈 객체가 생성되고 this가 바인딩 된다. 이 객체는 함수를 통해 생성된 객체이며, 자신의 부모인 프로토타입 객체와 연결 되어 있다. 그리고 return 문이 명시되어 있지 않는 경우에는 this로 바인딩 된 새로 생성된 객체가 리턴된다. 


```javascript
/* 생성자 함수 */
function ThisFunc(_name){
  this.name = _name
}

var myObject01 = new ThisFunc('myObject01');
var myObject02 = new ThisFunc('myObject02');

myObject01.name // this : myObject01
myObject02.name // this : myObject02


/* 생성자 함수 작동 방식 */

function ThisFunc(_name) {

    // 프로토타입 상속 및 this 참조 객체 생성
    var F = function() {};
    F.prototype = ThisFunc.prototype;
    var this = new F();

    // this 참조 객체에 속성 추가
    this.content = _name;

    // 암묵적으로 this 참조 객체 반환
    return this;
};

var myObject01 = new ThisFunc('myObject01');
var myObject02 = new ThisFunc('myObject02');

myObject01.name // this : myObject01
myObject02.name // this : myObject02
```

<br/>

### 4. call, apply, bind 통한 호출

this를 JS 코드로 주입 또는 설정, apply, call, bind는 this를 명시적으로 바인딩 설정 할 수 있는 방법이다.

- 객체 바인딩

```javascript
var obj = {
  name : 'yoon',
  getName : function(){
    console.log(this.name);
  }
}

obj.getName() // yoon

var obj2 = {
  name : 'kim'
};

obj.getName.apply(obj2); //kim
obj.getName.call(obj2); //kim
obj.getName.bind(obj2)(); //kim
```

<br/>

- 객체 생성자 함수 사용시

```javascript
function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
  
    this.func = function(){
        console.dir(this);
     }
}

var foo = {};
Person.apply(foo, ['foo', 30, 'man'])
foo.func()  //{ name: 'foo', age: 30, gender: 'man', func: [Function] }

var myObject = {};
Person.call(myObject, 'kim', 28, 'woman');
myObject.func() //{ name: 'kim', age: 28, gender: 'woman', func: [Function] }
```