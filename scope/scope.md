# scope

자바스크립트는 기본적으로 함수 단위의 scope(유효범위) ( 단 let, const를 쓰게 되면 블록 단위의 유효범위를 갖는다.)

유효범위의 종류는 크게 두 가지가 있습니다. 하나는 전역 유효범위(Global Scope), 또 하나는 지역 유효범위(Local Scope)입니다. 전역 유효범위는 스크립트 전체에서 참조되는 것을 의미하는데, 말 그대로 스크립트 내 어느 곳에서든 참조됩니다. 지역 유효범위는 정의된 함 수 안에서만 참조되는 것을 의미하며, 함수 밖에서는 참조하지 못합니다.

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

## **스코프 체인**

특정 변수를 찾기 위해 자기 자신의 스코프에서 탐색을 시작해 없을 경우 한단계 위 스코프에서 찾고 없으면 다시 올라가 위 단계의 스코프에서 찾는다. 최종적으로 전역 스코프 까지 올라가서 찾는다. 이런 식으로 꼬리를 물며 계속 범위를 넓혀 찾는 관계를 스코프 체인이라 한다. 

**렉시컬 스코핑 ( lexical scoping )**

\* 스코프는 함수 호출 시가 아닌 선언 할 때 생긴다. 

함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로 부터 가장 가까운 곳에 있는 변수를 계속 참조하게 된다.

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

## **호이스팅(hoisting)**
Hoisting => 끌어올리기, 들어 올려 나르기라는 뜻 JS에서는 변수 선언문을 끌어올린다는 의미

변수 선언문이 유효범위(함수범위) 안의 제일 상단부로 끌어올려 지게 되고, 선언문이 있던 자리에서 초기화가 된다.  
함수 선언문 역시 호이스팅이 된다.

```javascript

var test = "global"
function func(){
  console.log(test);
  var test = "local"
  console.log(test);
}

// 호이스팅 된 상태
var test = "global"
function func(){
  var test;
  console.log(test);
  test = "local"
  console.log(test)
}

``` 

<br/>

## **실행 컨텍스트**

[실행컨텍스트 이미지](https://www.google.co.kr/search?q=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+%EC%8B%A4%ED%96%89+%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXppbTqc3aAhXIwbwKHf9mDIMQ_AUICigB&biw=1440&bih=803#imgrc=a9BuBJplOYKnMM:)

실행 컨텍스트는 코드를 실행하는 환경이다. 실행에 필요한 여러 가지 정보들을 담고 있는데 정보란 대부분 함수이다. JavaScript는 일종의 콜 스택(Call Stack)을 갖고 있는데, 콜 스택에 쌓이며 제일 위에 위치하는 실행 문맥이 현재 실행되고 있는 실행 컨텍스트가 된다.

1. 처음 코드 실행시 순간 모든 것을 포함하는 전역 컨텍스트가 생김, 그리고 함수 호출시마다 컨텍스트가 생김
2. 컨텍스트 생성시 컨텍스트 안에 변수 객체(argument, variable), 스코프 체인, this가 생성
3. 컨텍스트 생성 후 함수 실행, 사용되는 변수들을 변수 객체 안에서 찾고 없으면 스코프 체인을 따라 올라감
4. 함수 실행이 다 끝나면 해당 컨텍스트가 사라진다.

<br/>

### 스코프 내용 참고

[http://www.nextree.co.kr/p7363/](http://www.nextree.co.kr/p7363/)

[https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e](https://www.zerocho.com/category/JavaScript/post/5740531574288ebc5f2ba97e)
