# Iterator

 Iterator는 next 메소드로 데이터를 순차적으로 호출할 수 있는 객체이다. 즉 실제로 루프를 돌면서 반복 도중에 현재 위치가 어디인지를 기억하는 것은 이터레이터이다. Symbol.iterator를 프로퍼티 키로 사용한 메소드는 이터레이터를 반환한다. next 메소드는 value, done 프로퍼티를 갖는 객체(iterator result)를 반환하며 이 메소드를 호출하여 이터러블 객체를 순회하며 단계별로 제어할 수 있다.

**이터러블(iterable)**

이터러블은 순회 가능한 자료 구조이다. Symbol.iterator를 프로퍼티 키로 사용한 메소드를 구현하는 것에 의해 순회 가능한 자료 구조인 이터러블이 된다.

반복 가능한 객체(iterable object)는 for...of 구문과 함께 ES2015에서 도입되었다. 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 Symbol.iterator 속성에 특별한 형태의 함수가 들어있다는 것이다.

객체의 Symbol.iterator 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(iterable object) 혹은 줄여서 iterable이라 부르고, 해당 객체는 iterable protocol을 만족한다고 말한다. 이런 객체들에 대해서는 ES2015에서 추가된 다양한 기능들을 사용할 수 있다.


```javascript
class Log {
    constructor(){
        this.messages = [];
    }

    add(message){
        this.messages.push({ message, timestamp : Date.now() });
    }

    [Symbol.iterator] () {
        // return this.messages.values();
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if(i >= messages.length)
                    return { value : undefined, done : true }
                return { value : messages[i++] , done : false}
            }
        }
    }
}

const log = new Log();

log.add("first day at sea");
log.add("spotted whale");
log.add("spotted another vessel");

for(let entry of log){
  console.log(`${entry.message} @ ${entry.timestamp}`);
}

const test = log[Symbol.iterator]()
console.log(test.next().value.message); // first day at sea
```
<br>

# Generator

제너레이터란 이터레이터를 사용해 자신의 실행을 제어하는 함수이다. 일반적인 함수는 매개변수를 받고 값을 반환하지만, 호출자는 매개변수 외에는 함수의 실행을 제어할 방법이 전혀 없다.

제너레이터에는 두 가지 새로운 개념을 도입했다. 하나는 함수의 실행을 개별적 단계로 나눔으로써 함수의 실행을 제어한다. 다른 하나는 실행 중인 함수와 통신하는 것이다.

- 제너레이터는 언제든지 호출자에게 제어권을 넘길(yield)수 있다.
- 제너레이터는 호출한 즉시 실행되지는 않는다. 대신 이터레이터를 반환하고, 이터레이터의 next 메서드를 호출함에 따라 실행된다.

제너레이터를 만들 때는 function 뒤에 *를 붙인다. 제너레이터에는 return 외에 yield 키워드를 쓸 수 있다.

```javascript
function* interrogate() {
  const name = yield "What is your name?";
  const color = yield "What is your favorite color?";
  return `${name}\'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next()); // { value: 'What is your name?', done: false }
console.log(it.next('yoon')); // { value: 'What is your favorite color?', done: false }
console.log(it.next('blue')); // { value: 'yoons favorite color is blue.', done: true }
```

**제너레이터 return**

제너레이터의 마지막 문이라도 제너레이터를 끝내지 않는다. 제너레이터에서 return문을 사용하면 그 위치와 관계없이 done은 true가 되고, value 프로퍼티는 return이 반화하는 값이 된다.

단 for of 문을 쓰게 되면 done이 true인 것은 출력 되지 않기 때문에 주의가 필요하다.

제너레이터에서 중요한 값을 return으로 반환하려하면 안된다. 제너레이터가 반환하는 값을 사용하려 할 때는 yield를 써야 하고, return은 제너레이터를 중간에 종료하는 목적으로만 사용해야한다. 따라서 제너레이터에 return을 쓸 때는 반환값을 쓰지 않도록 신경써야한다.

## 참고

- https://poiemaweb.com/es6-iteration-for-of
- https://poiemaweb.com/es6-generateor
- https://medium.com/@hyunwoojo/javascript-iterator-iterable-%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-2c6a7bb42d87
- https://helloworldjavascript.net/pages/260-iteration.html