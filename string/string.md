# String

컴퓨터 분야에서는 문자의 나열(string)이라는 뜻에서 문자열을 'string'이라 부릅니다. string 타입을 통해 일반적인 텍스트 데이터를 다룰 수 있습니다. JavaScript 문자열은 내부적으로 유니코드(Unicode)를 통해 표현됩니다.

## String Method

알고리즘 문제 및 데이터 처리를 위해 string 프로토타입 메소드를 쓸 일이 많다. 개발시 알아두면 좋은 메소드들을 정리하였다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

- slice, split
- substr
- padStart
- includes
- trim
- localeCompare( 문자열 sort시 많이 사용 )

## 알고리즘 문제

백준 1181번 : https://www.acmicpc.net/problem/1181

```javascript
// 1181 풀이 힌트
array.sort(function(x,y){
  return x.length-y.length || x.localeCompare(y)
});

```