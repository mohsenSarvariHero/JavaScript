//sources

// https://developer.mozilla.org/en-US/
// https://javascript.info/
// https://www.w3schools.com/js/

/*
Primitive data types
*/

// Number

// 12
// 12.5
// -5
// NaN
// console.log(typeof 8989);

// Variables
// let
// var ❌
/*
let pi =89;
console.log(pi);
pi = 12;
let num = 2005;

console.log(pi , num)
*/
// const
// const age = 25;
// console.log(age);

// let name;

//camelCase
// let firstName;
// const name = 'alireza'

//SNAKE_CASE
// const GOOGLE_URL = 'www.google.com'

// kebab-case

// Boolean
/*
let isSunday = true;
isSunday = false;

console.log(isSunday);
console.log(typeof isSunday);
*/

// String
/*
const firstName = 'alireza';
const char = firstName[1];

console.log(firstName);
console.log(char);
console.log(typeof firstName);

console.log(firstName.length,typeof firstName.length);

console.log(firstName.toUpperCase());
*/

// escaping string in javascript
// const lastName = 'me\'hrani';
/*
const firstName = 'kian';
const lastName = 'mehrani';
const surName = firstName + ' ' + lastName;
// toUpperCase
const upper = surName.toUpperCase();
console.log('upper>>>',upper);

// toLowerCase
const lower = upper.toLowerCase();

console.log('lower>>>',lower);


console.log('surName>>>>',surName);
*/

// trim
/*
const name2 = '        alireza ';
const name3 = name2.trim()
console.log(name2.length);
console.log(name3.length);
*/

// console.log(lastName);

// chaining methods
// console.log(name2.trim().toUpperCase().toLowerCase());

// indexOf
/*
const firstName = 'mehranmmmm';
console.log(firstName.indexOf('m'));
console.log(firstName.indexOf('mehran2'));
*/

//includes
/*
const firstName2 = 'omid';
console.log(firstName2.includes('xomid'));
console.log(firstName2.includes('omid'));
*/

// slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
/*
const surName = "alireza gholami";
const something = surName.slice(8);
console.log(something);

const firstName = surName.slice(0,7)
console.log(firstName,firstName.length);
*/

// concat
/*
const a = 'aaa';
const b = 'bbb';
const c = 'ccc';

// const sum = a + b + c
const sum = a.concat(b,c)
console.log(sum);
*/

// split
/*
const str = 'im sdkasdjn jhsd lasd dsf afdsa fdf';
const str2 = 'ab,12,i8,df';
console.log(str.split());

console.log(str.split(''));

console.log(str.split(' '));

console.log(str2.split(','));
*/

//replace
/*
const str = 'mehran omidi';
const str2 = str.replace('m', 'x');
const str3 = str.replace(/m/g, 'x');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
console.log(str2);
console.log(str3);
*/

// replaceAll
/*
const str = 'mehran omidi';
const str3 = str.replaceAll('m','x');
console.log(str3);
*/

// repeat
/*
const str = 'rr ';
const str2 = str.repeat(50);
console.log(str2 , str2.length);
*/

// string template literals
/*
const str1 = 'aaa';
const str2 = 'bbb';
const str3 = 'ZX ' + str1 + ' OOPO ' + str2;
console.log(str3);

const str4 = `ZX ${str1} OOPO ${str2}`;
console.log(str4);
*/

// functions
/*
let a = 5;
let b = 10;

function sum(){
 console.log(a+b);
}

sum();
*/
/*
function sum(a,b=1){
    console.log(a + b);
}

sum(15,10)
*/

/*
function sum(a,b){
    return a+b
}

let result = sum(15,10);
console.log(result);
*/
/*
let i =0;
function changeI(num){
    i = num
}
changeI(20)
console.log(i);
*/

// null
/*
let something = null;
console.log(something);
console.log(typeof something); // X


// undefined

let something2;
console.log(something2);
console.log(typeof something2);
*/
// num to str
/*
let num = 5555;
let str = String(num);
let str2 = num.toString();
let str3 = '' + num;

console.log(num);
console.log(str);
console.log(str2);
console.log(str3);
console.log(typeof num);
console.log(typeof str);
console.log(typeof str2);
console.log(typeof str3);
*/

// str to num
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
/*
let str = "125.25";
let num2 = parseInt(str);
let num1 = parseFloat(str);
console.log(num2);
console.log(num1);
console.log(typeof num2);
console.log(typeof num1);
*/
/*
let str = '818.5';

const num = Number(str);
const num2 = +str;
const num3 = parseInt(str);
const num4 = parseFloat(str);


console.log(str);
console.log(num);
console.log(num2);
console.log(num3);
console.log(num4);

*/
//myStudy
/*
let str = "mohsen";
let str2 = "sarvari";
let str3 = `my name is ${str} ${str2} and ${10+10}`;
console.log(str);
console.log(str2);
console.log(str3);*/

// let input = 13790630;
// const input1 = 13800630;
// const input2 = 13790520;
// let inputS;

// console.log(input % 100);
// console.log(input / 100);
// console.log(parseInt(input / 100));
// let year = [];
// for (let i = 0; i < 3; i++) {
//   let first = i != 2 ? input % 100 : input % 10000;
//   input = parseInt(input / 100);
//   year.push(first);
// }
// console.log(year);
// console.log(year.join());
// console.log(`${year[2]}/${year[1]}/${year[0]}`);

// const newSolve = (input) => {
//   let year = [];
//   for (let i = 0; i < 3; i++) {
//     let first = i != 2 ? input % 100 : input % 10000;
//     input = parseInt(input / 100);
//     year.push(first);
//   }
//   console.log(`${year[2]}/${year[1]}/${year[0]}`);
// };
// newSolve(input);
// newSolve(input1);
// newSolve(input2);
// let inputStr = String(input);
// console.log(inputStr);
// let first = inputStr.slice(0, 4);
// let second = inputStr.slice(4, 6);
// let third = inputStr.slice(6, 8);
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(`${first}/${second}/${third}`);

// const birth = (input) => {
//   let inputStr = String(input);

//   let first = inputStr.slice(0, 4);
//   let second = inputStr.slice(4, 6);
//   let third = inputStr.slice(6, 8);

//   console.log(`${first}/${second}/${third}`);
// };
// birth(input);
// birth(input2);
// birth(input1);
//2

// let num1 = "2k";
// let num2 = "5M";
// let num3 = "6m";

// let num1N = num1.toLowerCase().includes("k")
//   ? num1.toLowerCase().replace("k", "000")
//   : num1.toLowerCase().replace("m", "000000");
// console.log(num1N);

// function section(input) {
//   let num1N = input.toLowerCase().includes("k")
//     ? input.toLowerCase().replace("k", "000")
//     : input.toLowerCase().replace("m", "000000");
//   console.log(num1N);
// }
// section(num1);
// section(num2);
// section(num3);

let email1 = "mohsenesarvari1379@gmail.com";

console.log(email1.indexOf("@"));
let pos = email1.indexOf("@");
console.log(email1.slice(pos));
let end = email1.slice(pos);
console.log(email1.slice(0, 3) + "..." + end);
