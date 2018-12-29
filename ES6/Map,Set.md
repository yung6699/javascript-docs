# Map

Map은 key-value의 자료구조이다.

- 프로토타입 체인 때문에 의도하지 않는 연결이 생길 수 있다.
- 객체 안에 연결된 키와 값이 몇 개나 되는지 쉽게 알아낼 수 있는 방법이 없다.
- 키는 반드시 문자열이나 심볼이어야 하므로 객체를 키로 서서 값과 연결할 수 없다.
- 객체는 프로퍼티 순서를 전혀 보장하지 않는다.

위 내용은 기존 객체의 문제점이다. Map 객체는 이러한 결함을 모두 해결했다.

<br>

## Map Method Documents  
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Map

<br>

## WeakMap

- 키는 반드시 객체여야 한다.
- WeakMap의 키는 가비지 콜렉션에 포함될 수 있다.
- WeakMap은 이터러블이 아니며 clear() 메소드도 없다.

> WeakMap은 object만 키로 허용하고 임의의 값을 허용한다. WeakSet도 오브젝트만을 요소로 허용한다. 또한, 객체에 대한 참조가 더이상 존재하지 않을 경우 가비지 컬렉션의 대상이 된다. 즉, 언제든지 오브젝트가 GC의 대상이 될수 있기 때문에 WeakMap은 키들의 열거형을 지원하지 않는다.

**WeakMap의 이러한 특징 때문에 객체 인스턴스 private 키를 저장하기에 알맞다.**

```javascript
const SecretHolder = (function(){
    const secrets = new WeakMap();
    return class {
        setSecret(secret){
            secrets.set(this, secret);
        }

        getSecret(){
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A')
b.setSecret('secret B')

a.getSecret() // secret A
b.getSecret() // secret B
```

<br>

# Set

셋은 중복을 허용하지 않는 데이터 집합이다. (중복 없는 배열)

## Set Method Documents  

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

**WeakSet은 객체만 포함 할 수 있다. 이터러블이 아니므로 WeakSet의 용도는 적다.**

## 참고

https://shin-ae.github.io/2017/11/18/es6-05/

http://chanlee.github.io/2016/08/15/hello-es6-part-3/

https://medium.com/@hongkevin/js-5-es6-map-set-2a9ebf40f96b