# closure

### 1. 클로저의 정의

내부 함수가 외부 함수의 맥락에 접근 할 수 있는 것  

두개의 함수로 만들어진 환경으로 이루어진 특별한 객체의 한 종류이며 여기서 환경은 클로저가 생성될 때 그 범위에 있던 여러 지역 변수들이 포함된 context를 말한다. 이 클로저를 통해서 JS에 없는 비공개 속성 / 메소드를 구현한다.

클로저로 참조되는 외부 변수를 자유 변수라 한다.

1. 내부함수가 익명 함수로 되어 외부함수의 반환값으로 사용
2. 내부함수는 외부함수의 실행 환경에서 실행된다.
3. 내부함수에서 사용하는 변수는 외부함수의 변수 스코프에 있다.

> 클로저는 자바스크립트에만 있는 개념은 아니다. 여러 언어에서 사용하는 특성이며. 특히 함수를 일급 객체로 취급하는  
> 언어에서 주로 사용되는 특징이다.

<br/>

### 2. 클로저 기본 구조

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

### 3. 클로저 순서

1. 외부 함수의 호출 후 새로운 함수 반환
2. 반환 된 함수가 클로저이고 이 클로저는 자유 변수를 묶고 있다.
3. 반환 된 클로저에서 자유 변수를 호출 한다.

<br/>

### 4. 클로저의 활용

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

### 클로저 주의 사항

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
