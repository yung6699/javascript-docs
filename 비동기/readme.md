# 비동기 프로그래밍

어떤 일이 완료 되기를 기다리지 않고 다음 코드를 실행해 나가는 프로그래밍 방식을 비동기 프로그래밍이라 한다. 브라우저에서 비동기 프로그래밍은 주로 통신과 같이 오래 걸리는 작업들을 브라우저에 위임시 이루어진다.

> 자바스크립트 애플리케이션은 단일 스레드에서 동작한다. 자바스크립트가 싱글 스레드라는 것을 처음 들으면 할 수 있는 일이 제한 된다고 느낄지도 모른다. 멀티스레드 프로그래밍에서 겪어야 하는 문제를 신경 쓰지 않아도 된다는 장점도 있다. 물론 부드럽게 동작하는 SW를 만들기 위해서는 사용자의 입력뿐만 아니라 여러 문제를 비동기적 관점에서 생각해야한다.
> 
> \- Learging Javascript Chapter 14 비동기적 프로그래밍

자바스크립트 비동기적 프로그래밍을 처리하기 위한 패러다임이 있다.

- Callback
- Promise & 
- Generator
- async, await (ES2017 도입) 

**주로 비동기로 하는 것들**

- ajax 호출 및 네트워크 요청
- 파일 입출력 등 파일 시스템 작업
- 의도적인 시간 지연을 사용하는 기능

<br/>

## Callback

콜백은 자바스크립트에서 가장 오래된 비동기적 메커니즘이다. 콜백은 간단하게 말하면 나중에 호출할 함수이다.  
콜백함수는 일반적으로 다른 함수에 넘기거나 객체의 프로퍼티로 사용한다.

콜백은 JavaScript가 고차함수를 잘 지원한다는 특징 때문에 가장 많이 사용되는 비동기 프로그래밍 양식이었다. 하지만 콜백만으로는 복잡한 비동기 데이터 흐름를 표현하기가 어려워서 많은 프로그래머들이 힘들어했고, 결국 콜백 지옥(callback hell)이라는 표현이 생기게 되었다.

콜백을 많이 사용하게 되면 데이터의 흐름이 복잡해지고 직관성이 떨어지게 된다.

**오류 우선 콜백**

node가 인기를 얻게 되면서 오류 우선 콜백(error-first callback) 이라는 패턴이 생겼다. 콜백을 사용하면 예외 처리가 어려워, 콜백과 관련된 에러를 처리할 표준을 고심하던 중 콜백의 첫 번째 매개변수에 에러 객체를 쓰는 것이었다.

```javascript
  const fs = require('fs');
  const frame = 'may_or_may_not_exist.txt';
  fs.readFile(fname, function (err, data) {
    if(err) return console.error(`error reading file ${fname}:${err.message}`;
    console.log(`${fname} contents: ${data}`);
  });
```

콜백에서 가장 먼저 하는 일은 err 값을 확인하는 것이다. err가 참이면 문제가 있다는 뜻이므로 콘솔에 오류를 보고하고 즉시 빠져 나오는 방식으로 오류 우선 콜백을 사용한다. 

Promise를 사용하지 않으면 오류 우선 콜백은 노드 개발의 표준이나 다름없다. 콜백을 사용하는 인터페이스를 만들 때는 오류 우선 콜백을 사용하기를 강력하게 권한다.

<br/>

## Promise

Promise는 콜백의 단점을 해결하려는 시도 속에 만들어졌다. Promise는 콜백을 사용하며 대체하는 것이 아니다. 정확하게 말하면 콜백을 예측 가능한 패턴으로 사용할 수 있도록 하는 것이다.

Promise 기반의 비동기적 함수를 호출하면 그 함수는 Promise 인스턴스를 반환하며 성공, 실패를 결정하여 작업을 처리한다.

Promise는 '언젠가 끝나는 작업'의 결과값을 담는 통과 같은 객체이며 Promise 객체가 만들어지는 시점에는 그 통 안에 무엇이 들어갈지 모를 수도 있다. 대신 then 메소드를 통해 콜백을 등록해서, 작업이 끝났을 때 결과값을 가지고 추가 작업을 계속 진행한다.

Promise의 진가는, 복잡한 비동기 데이터 흐름을 다룰 때 발휘된다. 또한 프라미스는 객체이므로 어디든 전달할 수 있다는 점 또한 콜백에 비해 간편한 장점이다. 비동기적 처리를 다른 함수에서 처리하고 싶다면 프라미스를 넘기면 된다.

```javascript
  function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                (xhr.status === 200) ? 
                    resolve(xhr.response) : reject('Error: ' + xhr.status);
            }
        };  
        xhr.open('GET', url);
        xhr.send();
    })
  }

  const url = 'https://yts.am/api/v2/list_movies.json?quality=3D';

  // then 사용시
  get(url).then((res) => {
      console.log(res); 
  },(err) => {
      console.log(err);
  });

  // async, await 사용시
  const makeRequest = async () => {
      let temp = await get(url);
      console.log(temp);
      return "done"
  }

  makeRequest()
```

**promise, async/await는 세부 문서로 좀더 자세히 정리하였다.**

<br/>

## generator

**generator는 iterator 부분에서 같이 정리 할 예정임**

<br/>

## Javascript 비동기 프로그래밍에 대한 자세한 설명들

- [https://helloworldjavascript.net/pages/285-async.html](https://helloworldjavascript.net/pages/285-async.html) 

- [[JS] 비동기(async) 프로그래밍 이해하기](https://medium.com/@skc7401/js-%EB%B9%84%EB%8F%99%EA%B8%B0-async-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1-7dc99ecf4ca6)

- [자바스크립트는 어떻게 작동하는가](https://engineering.huiseoul.com/자바스크립트는-어떻게-작동하는가-이벤트-루프와-비동기-프로그래밍의-부상-async-await을-이용한-코딩-팁-다섯-가지-df65ffb4e7e)
