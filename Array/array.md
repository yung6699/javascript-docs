# Array (배열)

배열은 가장 간단한 메모리 데이터 구조이다. 거의 모든 프로그래밍 언어에서 배열은 기본으로 내장된 데이터 타입이다.

특히 자바스크립트에서 지원하는 Array.prototype의 메소드들은 데이터 처리 및 알고리즘을 푸는데 매우 많이 사용되므로 반드시 알고 있어야한다.

자바스크립트의 배열은 특수한 객체이다. 일반적인 객체와 달리 배열 콘텐츠에는 항상 순서가 있고, 키는 순차적인 숫자이다. 또한 배열은 유용한 메서드를 많이 가진 대단히 강력한 데이터 타입이다.


**MDN web docs** https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

<br>

## 자바스크립트 배열의 특징

자바스크립트 배열은 C언어의 효율적인 배열(indexed arra)와 더 강력한 동적 배열, 링크드 리스트(linked list)를 혼합한 배열이다.

- 배열 크기는 고정되지 않는다. 언제든지 요소를 추가하거나 제거할 수 있다.
- 요소의 데이터 타입을 가리지 않는다. 문자열만 쓸 수 있는 배열 또는 숫자만 쓸 수 있는 배열 개념이 없다.

<br>

## Array Method

배열 조작 메서드 중 일부는 배열 '자체를' 수정하는 경우도 있고 다른 일부는 새 배열을 반환하는 경우도 있다. 메서드 이름에 이런 차이점에 대한 힌트가 없어 docs 등을 참고하여 개발을 해야한다.

sort(), map(), filter(), reduce(), includes() 등 유용한 메소드가 많이 있다. 실제 알고리즘 풀이에서도 많이 쓴다. 알아두면 데이터 처리에 굉장히 유용하다.

<br>

**reduce()로 할수 있는 수 많은 방법들**

reduce 콜백 함수가 받는 첫번째 매개변수는 배열이 줄어드는 대상인 어큐뮬레이터, 두번째 부터는 현재 배열 요소, 현재 인덱스, 배열 자체이다. 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

https://medium.com/@hongkevin/js-3-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4-%EB%A9%94%EC%84%9C%EB%93%9C-reduce-100-%ED%99%9C%EC%9A%A9%EB%B2%95-feat-egghead-io-97c679857ece

<br>

**sort() 메소드**

코딩 테스트에서 사용된 프로그래밍 언어 중 C++과 Python에는 안정 정렬이 있고, Java와 JavaScript, Swift에는 안정 정렬이 없습니다. PHP 언어는 숫자 값을 고려해 정렬하는 natsort()를 기본 함수로 제공하기도 합니다. (아쉽게도 문제 3과 조건이 달라 그대로는 쓸 수 없지만요.)

기본 정렬 함수가 안정 정렬을 지원하지 않거나, 이 문제처럼 비교 조건이 까다로운 경우에는 decorate-sort-undecorate 패턴을 이용해서 푼다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

생활코딩 댓글에 원리 : 
https://opentutorials.org/course/50/109

카카오 3번 문제 : 
http://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/