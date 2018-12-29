# prototype

자바스크립트는 prototype 기반 객체지향 언어이다.

자바스크립트의 모든 객체는 자신을 생성한 객체 원형에 대한 숨겨진 연결을 갖는다. 이때 자기 자신을 생성하기 위해 사용된 객체원형을 프로토타입이란 한다. 자바스크립트의 모든 객체는 Object 객체의 프로토타입을 기반으로 확장 되었기때문에 이 연결의 끝은 Object 객체의 프로토타입 Object다.

자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체에 연결되어 있다. 그리고 이것은 마치 객체지향의 상속개념과 같이 부모 객체의 프로퍼티, 메소드를 상속받아 사용할 수 있게 한다.

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

- 객체는 데이터와 기능을 논리적으로 묶어 놓은 것
- 클래스는 추상적이고 범용적, 인스턴스는 구체적이고 한정적인 것, 기능은 메서드
- 인스턴스를 처음 만들 때 생성자가 실행돠며, 생성자는 객체 인스턴스를 초기화한다.

객체지향 특성 : http://asfirstalways.tistory.com/331

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