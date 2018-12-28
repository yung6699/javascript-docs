/**
 *  자바스크립트의 sort 메소드는 안정정렬은 아니다.
 *  비교 조건이 까다로운 경우 즉 여러 조건이 많을 경우 decorate-sort-undecorate 패턴을 이용해서
 *  정렬을 풀어야 한다.
 * 
 *  compareFunction은 불리언, 숫자 모두 가능하다. 문자열 길이로도 비교하여 정렬이 가
 *  능하며 숫자, 문자 모두 정렬 할 수 있다.
 */

 /* 
    a가 b 보다 크면 음수, b가 a보다 크면 양수 같으면 0
 */


const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);

points.sort((a, b) => b - a);
console.log(points);

const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'Abd', value: 45 },
    { name: 'And', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
  ];

items.sort((a, b) => {
    
    if (a.name  > b.name) {
        return 1;
    } 
    
    if (a.name  < b.name) {
        return -1;
    } 
    
    return a.value - b.value;
})

console.log(items);