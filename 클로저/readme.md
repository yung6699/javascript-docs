# 클로저 (Closure)

## 정의

클로저는 자신이 생성될 때의 스코프에서 알 수 있었던 변수 중 언젠가 자신이 실행될 때 사용할 변수들만 기억하여 유지시키는 함수다.

자바스크립트 모든 함수는 글로절 스코프에서 선언되거나 함수 안에서 선언된다. 자바스크립트의 모든 함수는 상위 스코프르 가지며 모든 함수는 자신이 정의 되는 순간의 실행 컨텍스트 안에 있다. 자바스크립트의 모든 함수는 어느 곳에서 생성하든, 어떤 방법으로 생성하든 자신이 생성될 때의 환경을 기억한다.

두개의 함수로 만들어진 환경으로 이루어진 특별한 객체의 한 종류이며 여기서 환경은 클로저가 생성될 때 그 범위에 있던 여러 지역 변수들이 포함된 context를 말한다. 이 클로저를 통해서 JS에 없는 비공개 속성 메소드를 구현한다.

클로저로 참조되는 외부 변수를 자유 변수라 한다.

즉 자신을 포함하는 외부함수보다 내부 함수가 더 오래 유지되는 경우, 외부 함수 밖에서 내부 함수가 호출되더라도 외부 함수의 지역변수에 접근할 수 있다. 이러한 매커니즘이 클로저이다.


1. 내부함수가 익명 함수로 되어 외부함수의 반환값으로 사용
2. 내부함수는 외부함수의 실행 환경에서 실행된다.
3. 내부함수에서 사용하는 변수는 외부함수의 변수 스코프에 있다.

> 클로저는 자바스크립트에만 있는 개념은 아니다. 여러 언어에서 사용하는 특성이며. 특히 함수를 일급 객체로 취급하는 언어에서 주로 사용되는 특징이다.

**클로저는 각자의 환경을 가진다. 이 환경을 기억하기 위해서는 메모리가 소모된다. 클러저를 통해 내부 변수를 참조하는 동안 내부 변수가 참조하는 메모리를 GC가 회수하지 않는다.**

<br/>

## 기본 구조

```javascript
function outerFunc(){
    var str = "Free Variable"; // 자유 변수
  	return function(){
    	console.log(str);
  	}  
}

var inner = outerFunc();
inner(); // Free Variable
```
<br/>

## 클로저 사용 

- 캡슐화, 은닉화
- 이전 상황을 나중에 일어날 상황과 이어나갈 때
- 함수로 함수를 만들거나 부분 적용을 할 때

## 클로저 순서

1. 외부 함수의 호출 후 새로운 함수 반환
2. 반환 된 함수가 클로저이고 이 클로저는 자유 변수를 묶고 있다.
3. 반환 된 클로저에서 자유 변수를 호출 한다.

<br/>

## 클로저 예제

- 캡슐화 , Private Variable

``` javascript
function dataStore(_data){
  var data = _data;
  return {
    get_data : function(){
        return data;
    },
    set_data : function(_data){
        data = _data;
    }
  }  
}

var store = dataStore("data_00");
console.log(store.data) // undefined
console.log(store.get_data()); // data_00

store.set_data("data_01");
console.log(store.get_data()); // data_01
```

- 루프 안 설정 ( *클로저 활용의 단골 예제이다*. ) 

```javascript
function countSeconds(num){
  for(var i = 1; i <= num; i++){
    setTimeout(function(){
      console.log(i)
    }, i * 1000);
  }
}

countSeconds(3); // 4 4 4

// 클로저 개선
function countSeconds(num){
  for(var i = 1; i <= num; i++){
      setTimeout(function(currentI){
        return function(){ 
          console.log(currentI)
        }
      }(i), i*1000);
  }
}

countSeconds(3); // 1 2 3

// let을 활용한 개선 방법

function countSeconds(num) {
  for(let i = 1; i <= num; i++){
    setTimeout(function(){
      console.log(i);
    }, i * 1000)
  }
}

countSeconds(3); // 1 2 3
```

<br/>

## 클로저 주의 사항

**클로저의 프로퍼티값이 쓰기 가능하므로 그 값이 여러 번 호출로 항상 변할 수 있음에 유의해야한다.**

```javascript
function outerFunc(argNum){
  var num = argNum;
  return function(x) {
    num += x;
    console.log('num : ' + num);
  }
}

var exam = outerFunc(30);
exam(5); // num : 35
exam(-10); // num : 25
```

**하나의 클로저가 여러 함수의 객체 스코프 체인에 들어 있는 경우**

```javascript
function func() {
  var x = 1;
  return {
    func1 : function(){console.log(++x)},
    func2 : function(){console.log(--x)}
  }
};

var exam = func();
exam.func1(); // 2
exam.func2(); // 1
```

<br/>

## 정리

클로저는 자바스크립트에서 절차지향 프로그래밍, 객체지향 프로그래밍, 함수형 프로그래밍 모두를 지탱하는 매우 중요한 기능이자 개념이다.


## 참고

[https://meetup.toast.com/posts/86](https://meetup.toast.com/posts/86)
