# 자주 쓰는 Array 함수들

### 1. 배열의 특정값을 찾을때 indexOf, lastIndexOf 활용

```javascript
var array = ["a","b","c","a","z","a","i"];
var isExist = false;

for(var i = 0, max = array.length; i < max; i++){
   if( array[i] === "a" ){
   	  isExist = true;
   }
}

// 더 간단 하다.
var isExist = (array.indexOf("a") !== -1);
console.log(isExist) // true

// lastIndexOf는 검색 조건에 부합하는, 가장 마지막에 위치한 원소를 찾아 그 인덱스를 반환
var isExist = (array.lastIndexOf("a") !== -1);
console.log(isExist) // true
```

<br/>

### 2. 배열의 특정 조건에 맞는 값 만을 뽑을 때  filter

```javascript
var id = "찾는 값"
var items = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 'aaaaa',
        name: 'chris'
    },
    {
        id: 'aaaaa',
        name: 'chrissdfdsf'
    }
]

// 조건에 맞는 값만 리스트로 반환 된다.
var filterList = items.filter((item) => {
    return item.id === id;
});
```

<br/>

### 3. forEach

```javascript
var array = ["a","b","c","z","i"];
array.forEach(function(value, index){
  	// 배열의 각 원소별로 지정된 함수를 실행한다.
  	console.log(value + "1");  //a1 b1 c1 z1 i1
});
```

<br/>

### 4. map ( 상당히 유용한 메소드이다, 리액트에서 많이 쓴다.)

```javascript
var array = ["a","b","c","z","i"];
var mapResult = array.map(function(value, index){

  	// 배열의 각 원소별로 지정된 함수를 실행하고 새로 배열을 구성하여 반환한다.
  	return value + "1";
});
console.log(mapResult); // [a1, b1, c1, z1, i1]
```

<br/>

### 5. reduce

```javascript
var array = ["a","b","c","z","i"];
var result = array.reduce(function(accumulator, currentValue){

      //(accumulator, current) => a b, a|b c, a|b|c z, a|b|c|z i
    console.log(accumulator, currentValue);    
    return accumulator + "|" + currentValue;    

})
console.log(result); // a|b|c|z|i

var result = array.reduce(function(accumulator, currentValue){

      //(accumulator, current) => ABC a , ABC|a b ,ABC|a|b c ...
    console.log(accumulator, currentValue);    
    return accumulator + "|" + currentValue;    

}, "ABC") // reduce 두번째 인자로 초기값 선언이 가능하다.

console.log(result); // ABC|a|b|c|z|i
```

<br/>

### 6. push, pop, shift, unshift

```javascript
// push 맨 뒤 삽입, unshift는 맨 앞 삽입
// shift는 맨 앞의 요소 삭제 시, pop은 맨 뒷 부분 요소 삭제시
// 스택과 큐의 원리와 관련된 메소드이다.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.unshift(-1); //[-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.unshift(-4,-3); //[-4, -3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.shift(); //[-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.pop(); //[-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
numbers.push(10); //[-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10]
numbers.push(11, 12); //[-3, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
```

<br/>

### 7.  splice

```javascript
//  splice함수 인자 순서
//  추가/삭제하려는 인덱스, 삭제할 원소 개수, 이후 배열로 추가할 나열된 원소들
//  splice 사용법은 알아두면 배열 자료구조 작성이 매우 도움이 된다.
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.splice(1, 3) //[0, 4, 5, 6, 7, 8, 9];

//es5
numbers.splice(1, 0, 1, 2, 3) //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//es6
var list = [-1, -2, -3]
numbers.splice(1, 0, ...list) //[ 0, -1, -2, -3, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//인자를 하나만 주면 인자로 넘어온 인덱스부터 끝까지 삭제한다.
numbers.splice(1) // [0]
```

<br/>

### 8. sort, reverse

```javascript
// sort 함수는 정렬할 때 사용 한다.
// a - b는 오름차순, b - a는 내림차순이다.
var numbers = [4, 1, 7, 8, 10, 5, 6, 2, 9, 3, 15, 11, 21, 20];

numbers.sort(function(a, b) { 
  return a - b; // 음수이면 a가 b보다 작다는 뜻, 이런 기준으로 정렬
  // return b - a; // 역순 정렬
});

numbers // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 20, 21 ]
numbers.reverse() // [ 21, 20, 15, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/* Object도 요소 값을 활용하여 정렬 가능 */
var friends = [
    { name: 'John', age: 34 },
    { name: 'Camila', age: 21 },
    { name: 'Jack', age: 30 }
];

function comparePerson(a, b) {
    // if (a.age < b.age) {
    //     return -1;
    // } else if (a.age > b.age) {
    //     return 1;
    // } else {
    //     return 0;
    // }
  
	// 여러 조건문을 삼항 연산자 중첩으로 표기 가능
    return a.age < b.age ? -1 : a.age > b.age ? 1 : 0;
}

console.log(friends.sort(comparePerson)); 
/*
  [ { name: 'Camila', age: 21 }, 
    { name: 'Jack', age: 30 },
    { name: 'John', age: 34 } ]
*/
 

```

<br/>

### 9. join, toString

```javascript
// 배열 원소 전부를 하나의 문자열로 합친다
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = numbers.join('/');
console.log(result) // 0/1/2/3/4/5/6/7/8/9
console.log(numbers.toString()) // 0,1,2,3,4,5,6,7,8,9
```

<br/>

### 10. concat

```javascript
// 여러 배열을 하나의 배열로 합칠 때 사용한다.
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers = negativeNumbers.concat(0, positiveNumbers);
console.log(numbers); // [ -3, -2, -1, 0, 1, 2, 3 ]
```

<br/>

## 참고

[자바스크립트 자료 구조와 알고리즘](http://book.naver.com/bookdb/book_detail.nhn?bid=9755482)

[자바스크립트 5가지 배열 메소드들](http://blog.kazikai.net/?p=16)
