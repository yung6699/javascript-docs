/**
 * 배열로 이루어진 배열의 펼치기(flatten)
 */

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((accum, cur) => [ ...accum, ...cur ],[]);
console.log(flattened);


/**
 *   reduce 메소드로 최대, 최소값 찾는 방법 
 */ 

const array = [1, 20, 17, 2, 8, 19];
let max = array.reduce((prev, cur) => prev > cur ? prev : cur ); //최대값
let min = array.reduce((prev, cur) => prev > cur ? cur : prev ); //최소값

console.log(max, min);



/**
 *  reduce로 카운팅 하기
 */

const votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];
const reducer = (accum, val) => {
  if (accum.hasOwnProperty(val)) {
    accum[val] = accum[val] + 1;
  } else {
    accum[val] = 1;
  }
  return accum;
}
const initialValue = {};
const result = votes.reduce(reducer, initialValue);
console.log(result); // { kim: 1, hong: 3, lee: 3 }



/**
 *  reduce 중복 제거
 */

const names = ['Mike', 'John', 'Bob', 'Jane', 'Bob', 'John', 'Lee', 'Mason'] ;
const arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const single = names.reduce(( accum, cur ) => {
	if(!accum.includes(cur)) accum.push(cur) ;
	return accum ;
}, []) ;

console.log(single);


/**
 *  reduce로 평균값 구하기
 */

const data = [1, 2, 3, 4, 5, 6, 1];
const reducer02 = (accumulator, value, index, array) => {
  let sumOfAccAndVal = accumulator + value;
  if (index === array.length - 1) {
    return (sumOfAccAndVal) / array.length;
  }
  return sumOfAccAndVal;
};

let getMean = data.reduce(reducer02, 0);
console.log(getMean); // 3.142857142857143