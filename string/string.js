/**
 *  자릿수 맞추기 위해 0 또는 문자열 채우는 방법
 *  padStart 메소드
 */

const str1 = '5';
console.log(str1.padStart(5, '0'));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length , '*');
console.log(maskedNumber, last4Digits);

/**
 *  includes 메소드
 *  문자열에 특정 단어가 있는지 판단할때 쓰면 좋다.
  */

 let sentence = 'The quick brown fox jumped over the lazy dog.';
 let word = 'fox';
 console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
