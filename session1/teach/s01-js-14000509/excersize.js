//1
const input = 13790630;
const input1 = 13800630;
const input2 = 13790520;
let inputS;

function date(input) {
    inputS = input.toString();
    const result = inputS.slice(0, 4) + "/" + inputS.slice(4, 6) + "/" + inputS.slice(6);
    return result;
}

console.log(date(input));
console.log(date(input1));
console.log(date(input2));

//2
const inp = "2m";
const inp1 = "4K";
const inp2 = "5M";
let res;
let lower;
// if (lower.includes("m")) {
//     res = lower.replace("m", "000000");
// } else if (lower.includes("k")) {
//     res = lower.replace("k", "000");
// }

function convert(str) {
    lower = str.toLowerCase();
    lower.includes("m") ? res = lower.replace("m", "000000") : lower.includes("k") ? res = lower.replace("k", "000") : "none";
    return +res;
}

console.log(convert(inp));
console.log(convert(inp1));
console.log(convert(inp2));

//3

const num = 2000;
const num2 = 4000000;
const num3 = 8000;
let strN;
let res1;

function invert(num) {
    strN = num.toString();
    strN.includes("000000") ? res1 = strN.replace("000000", "M") : res1 = strN.replace("000", "K");
    return res1;
}
console.log(invert(num));
console.log(invert(num2));
console.log(invert(num3));

//4

let email = "mohsen@gmail.com";
let email2 = "mohsen-sarvari@gmail.com";
let email3 = "ahad-sen@gmail.com";

let first;
let pos;
let end;
let totall;

function dot(email) {
    first = email.slice(0, 3);
    pos = email.indexOf("@");
    end = email.slice(pos);
    totall = first + "..." + end;
    return totall;
}
console.log(dot(email));
console.log(dot(email2));
console.log(dot(email3));