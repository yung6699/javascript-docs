# Object

> 자바스크립트에서 객체는 단순히 key : value 형태의 프로퍼티들을 저장하는 컨테이너로서, 컴퓨터 과학 분야에서 해시라는 자료구조와 상당히 유사하다. 객체는 여러 개의 프로퍼티들을 포함할 수 있으며, 이러한 객체의 프로퍼티는 기본 타입 값을 포함하거나, 다른 객체를 가리킬 수도 있다. 이러한 프로퍼티의 성질에 따라 객체의 프로퍼티는 함수로 포함할 수 있으며, 자바스크립트에서는 이러한 프로퍼티를 메서드라 부른다.

- 객체는 순서를 보장하지 않는다.

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
