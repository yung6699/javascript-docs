# Object

> 자바스크립트에서 객체는 단순히 key : value 형태의 프로퍼티들을 저장하는 컨테이너로서, 컴퓨터 과학 분야에서 해시라는 자료구조와 상당히 유사하다. 객체는 여러 개의 프로퍼티들을 포함할 수 있으며, 이러한 객체의 프로퍼티는 기본 타입 값을 포함하거나, 다른 객체를 가리킬 수도 있다. 이러한 프로퍼티의 성질에 따라 객체의 프로퍼티는 함수로 포함할 수 있으며, 자바스크립트에서는 이러한 프로퍼티를 메서드라 부른다.

얕은 복사(shallow copy) : call by reference  
깊은 복사(deep copy) : call by value

### 1. 객체 생성

```javascript
var person01 = {
  name : 'yoon'
}

var person02 = new Object();
person02.name = 'kim'

// 생성자 함수
function Person03(){}
var person03 = new Person03();
person03.name = 'park'
```
<br/>

### 2. 프로퍼티 탐지

- in
- hasOwnProperty()

```javascript
var person = {
  name : 'yoon',
  age : 28,
  like : 'baseball',
  getName : function(){
    console.log(this.name)
  } 
}

console.log("like" in person) //true
console.log("getName" in person) //true
console.log("habit" in person) //false

console.log(person.hasOwnProperty("like")) //true
console.log(person.hasOwnProperty("habit")) //false

// in과 hasOwnProperty 차이
console.log("toString" in person) //true
console.log(person.hasOwnProperty("toString")) //false
```

> - toString 메소드의 존재 여부 파악시 in 연산자는 person객체의 고유 프로퍼티 뿐만 아니라 연결 되어있는 프로토 타입 프로퍼티까지 찾는다. 
> - hasOwnProperty 메소드는 주어진 프로퍼티가 객체에 존재하는 동시에 person 고유 프로퍼티일 때만 true를 반환한다.
> - 해당 프로퍼티가 객체의 고유 프로퍼티인지 까지 좀 더 엄격하게 확인시 hasOwnProperty를 사용한다.

<br/>

### 3. 프로퍼티 제거

```javascript
var person = {
  name : 'yoon',
  age : 28,
  like : 'baseball'
}

console.log("like" in person) //true
delete person.like;
console.log("like" in person) //false
console.log(person.like) //undefined
```

<br/>

### 4. 프로퍼티 열거하기

```javascript
var person = {
  name : 'yoon',
  age : 28,
  like : 'baseball'
}

var properties = Object.keys(person);
console.log(properties); //[ 'name', 'age', 'like' ]
```

<br/>

### 5.  getter, setter

```javascript
var person = {
  _name : "yoon",
  
  get name() {
    return this._name;
  },
  
  set name(name) {
    this._name = name;
  }
};

console.log(person.name); // yoon

person.name = "kim";
console.log(person.name); // kim
```

<br/>

### 6. 객체 수정, 확장 방지

```javascript
var person = {
  name : 'yoon'
}

console.log(Object.isExtensible(person)) //true, 확장 가능한지 판단하는 메소드
Object.preventExtensions(person);
console.log(Object.isExtensible(person)) //false

person.age = 10;
console.log("age" in person); //false;
```

<br/>
<hr/>

## prototype

자바스크립트의 모든 객체는 자신을 생성한 객체 원형에 대한 숨겨진 연결을 갖는다. 이때 자기 자신을 생성하기 위해 사용된 객체원형을 프로토타입이란 한다. 자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장 되었기때문에 이 연결의 끝은 Object 객체의 프로토타입 Object 다.

**자바스크립트의 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]] 링크로 연결한다.**

[프로토타입 중요사항](http://insanehong.kr/post/javascript-prototype/)

<br/>

## 프로토타입 체이닝

[프로토타입 체이닝 이미지](https://www.google.co.kr/search?q=%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85+%EC%B2%B4%EC%9D%B4%EB%8B%9D&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwju18O7-MzaAhXDULwKHa51BCEQ_AUICigB&biw=1440&bih=803#imgrc=hMqnLUY-pCzA9M:)

자바스크립트에서 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토 타입 객체를 자신의 부모 객체로 설정하는 [[prototype]]링크로 연결한다.   
**( prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체 부모 객체로 취급함 )**

자바스크립트에서 object.prototype 객체는 프로토타입 체이닝의 종점이다. 또한 프로토타입 객체 역시 JS 객체 이므로 일반 객체처럼 동적으로 추가 / 삭제가 가능하다.

<br/>

## 프로토타입을 활용한 자바스크립트 상속

> [객체 지향 프로그래밍](https://ko.wikipedia.org/wiki/%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D)(OOP)에서, **상속**(inheritance)은 객체들 간의 관계를 구축하는 방법이다. 클래스로 객체가 정의되는 고전 상속에서, 클래스는 기반 클래스, 수퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다. 그 결과로 생기는 클래스를 파생 클래스, 서브클래스, 또는 자식 클래스라고 한다. 상속을 통한 클래스들의 관계는 계층을 형성한다. 프로토타입 기반 프로그래밍에서는, 객체가 클래스를 따로 정의할 필요 없이 다른 객체로부터 직접 정의될 수 있다. 이러한 특징을 차등 상속이라고 부른다.

<br/>

**밑 코드는 프로토 타입을 활용한 상속 구현 방법이다.**

```javascript
function Animal(name){
  this.name = name;
}

Animal.prototype.move = function(){
  console.log(this.name + '가 움직인다.');
}

function Person(name){
  this.name = name;
}

Person.prototype = new Animal();
var foo = new Person('foo');
foo.move();

Person.prototype.study = function(){
  console.log(this.name + '가 공부한다.');
}

foo.study();
```

<br/>

- ES6에서 클래스가 생기면서 쉽게 상속이 가능하다.

```javascript
class Animal {
  constructor(name){
    this.name = name;
  }

  move(){
    console.log(this.name + '가 움직인다.');
  }
  
  eat(){
    console.log(this.name + '가 먹는다.');
  }
}

class Person extends Animal{  
  // 서브 클래스에서 정의된 constructor가 없다면 슈퍼 클래스의 constructor가 호출된다.
  study(){
     console.log(this.name + '가 공부한다.');
  }
}

let foo = new Person('foo')
foo.move();
foo.study();
foo.eat();
```

<br/>