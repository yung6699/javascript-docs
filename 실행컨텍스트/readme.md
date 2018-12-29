# 실행 컨텍스트 (Execution Context)

[실행컨텍스트 이미지](https://www.google.co.kr/search?q=%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8+%EC%8B%A4%ED%96%89+%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiXppbTqc3aAhXIwbwKHf9mDIMQ_AUICigB&biw=1440&bih=803#imgrc=a9BuBJplOYKnMM:)

 JavaScript는 일종의 콜 스택(Call Stack)을 갖고 있는데, 콜 스택에 쌓이며 제일 위에 위치하는 것이 현재 실행되고 있는 실행 컨텍스트가 된다.

**실행 컨텍스트(Execution Context)는 scope, hoisting, this, function, closure 등의 동작원리를 담고 있는 자바스크립트의 핵심원리이다.**

- 실행 가능한 코드를 형상화하고 구문하는 추상적인 개념, 즉 실행 가능한 코드 블럭이 실행되는 환경
- CallStack에 저장되는 각 항목을 실행 맥락이라 부른다.


실행 컨텍스트를 이해하려면 Javascript 코드 처리 과정을 알아야한다.

- [브라우저의 JavaScript 코드 실행 과정](https://helloworldjavascript.net/pages/285-async.html)
- [Javascript 이벤트 처리](https://poiemaweb.com/js-event)
- [How JavaScript works](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)

<br/>

## 컨텍스트 생성

호출 스택에 저장되는 각 항목을 실행 컨텍스트(execution context)라고 부른다. 실행 맥락에는 아래와 같은 정보들이 저장된다.

- 함수 내부에서 사용되는 변수
- 스코프 체인
- this가 가리키는 객체

현재 실행되는 컨텍스트에서 이 컨텍스트와 관련없는 실행코드가 실행되면 새로운 컨텍스트가 생성되어 콜스택에 들어가고 제어권이 그 컨텍스트로 이동한다.

## 참고
[https://blog.naver.com/gi_balja/221261731281](https://blog.naver.com/gi_balja/221261731281)
