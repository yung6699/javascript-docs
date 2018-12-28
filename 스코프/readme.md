# scope

자바스크립트는 기본적으로 함수 단위의 scope(유효범위) ( 단 let, const를 쓰게 되면 블록 단위의 유효범위를 갖는다.)

- 변수와 상수, 매개변수가 언제 어디에서 정의되는지 결정
- 스코프는 프로그램에 현재 실행 중인 부분, 즉 실행 컨텍스트에서 현재 보이고 접근할 수 있는 식별자를 의미
- 특정 장소에 변수를 저장하고 나중에 그 변수를 찾는데 잘 정의된 규칙이 필요하다. 이 규칙이 스코프이다.

유효범위의 종류는 크게 두 가지가 있다. 하나는 전역 유효범위(Global Scope), 또 하나는 지역 유효범위(Local Scope)이다. 전역 유효범위는 스크립트 전체에서 참조되는 것을 의미하는데, 말 그대로 스크립트 내 어느 곳에서든 참조되며 지역 유효범위는 정의된 함수 안에서만 참조되는 것을 의미한다.

```javascript
function scopeTest() {  
  var test = "outter";
  if (true) {
    var test ="inner"
  }
  console.log("test = " + test);
}
scopeTest(); // test = inner 


var scope = "outter";  
function scopeExam(){  
    var scope = "inner";
    console.log("scope = " + scope);
}
scopeExam(); // scope = inner

```

<br/>

**렉시컬(정적) 스코프( lexical scoping )**

- 스코프는 함수 호출 시가 아닌 선언 할 때 생긴다.
- 프로그래머가 코드를 짤 때 변수와 스코프 블록 어디서 작성하는가에 기초해서 확정된다.
- 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프에서 가장 가까운 곳에 있는 변수를 참조한다.

**자바스크립트 프로그램 시작시, 즉 어떤 함수도 호출하지 않았을 때 실행 흐름은 전역 스코프에 있다.**

```javascript
var name = "test";

function f1(){
  console.log(name);
}

function f2(){
  var name = "test 02";
  f1();
}

f1() // test
```
<br/>

## **스코프 체인**

- 스코프는 계층적이다. 따라서 어떤 변수가 스코프에 있는지 확인하는 스코프 체인이라는 개념이 있다.
- 스코프 체인은 일종의 리스트로서 전역 객체와 중첩된 함수의 스코프 레퍼런스를 차례대로 저장하고 있다.
- 즉 해당 전역 또는 함수가 참조할 수 있는 변수, 함수 선언 등의 정보를 담고 있는 리스트이다.
- 컨텍스트가 생성되면 스코프 정보를 생성하여 저장하는데 이때 연관된 스코프들을 연결 리스트와 유사하게 만든다. 이것을 스코프 체인이라 한다.

> 특정 변수를 찾기 위해 자기 자신의 스코프에서 탐색을 시작해 없을 경우 한단계 위 스코프에서 찾고 없으면 다시 올라가 위 단계의 스코프에서 찾는다. 최종적으로 전역 스코프 까지 올라가서 찾는다. 이런 식으로 꼬리를 물며 계속 범위를 넓혀 찾는 관계를 스코프 체인이라 한다. 

<br/>

### 스코프 내용 참고

[https://meetup.toast.com/posts/86](https://meetup.toast.com/posts/86)

[http://www.nextree.co.kr/p7363/](http://www.nextree.co.kr/p7363/)

[https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)
