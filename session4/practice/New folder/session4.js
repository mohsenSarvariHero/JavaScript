//E3
// let array = ['mohsen'];
// let rev = array.reverse();
// console.log(rev);
// function reverseString(str) {

//     return str;
// }
// console.log(reverseString("hello"));
function reverseString(str) {
    str = str.toString();
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    if (joinArray == str) {
        return true;
    } else {
        return false;
    }
    // return joinArray; // "olleh"
}

console.log(reverseString("non"));
console.log(reverseString("none"));
console.log(reverseString(152));

console.log(reverseString(9119));
//E2
/*
let a;
let b;
let c = [];
let i = 0;
let d;

function mul(num) {
    num = num.toString();
    a = num.split('');
    for (let item of a) {
        b = item * item;
        c.push(b);


    }
    console.log(c);
    for (let el of c) {
        return el;
    }

    // for (i = 0; i < c.length; i++) {
    //     d = c[i];

    // }
    //return d;
}
console.log(mul(19));
//919
//

// let f = [1, 54, 52];
// for (let j in f) {
//     console.log(f[j]);
// }*/
// let n = 919;
// let f = n.toString();
// let len = f.length;
// let r;
// console.log(len);
// let i;
// for (i in f) {
//     r = f[i] * f[i];
//     console.log(r);
// }
//E2
let x;
let y;
let i;
let z;
let s = [];
let c;

function multi(num) {
    x = num;
    y = x.toString();
    for (i in y) {
        z = y[i] * y[i];
        s.push(z);

    }
    for (let v in s) {
        console.log(s[v]);
    }
    return s;


}
console.log(multi(919));
//return r;
// f[0] * f[0], f[1] * f[1], f[2] * f[2]
// console.log(f[0] * f[0], f[1] * f[1], f[2] * f[2]);

// const filt = (arr) => {
//     if (arr.filter(e1 => el / 2 == 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let arr = [2, 3, 5, 8]
// console.log(filt(arr));

//E4
// function high(arr) {
//     arr.sort(function(a, b) {
//         return b - a;
//     })
// }

let arr = [1, 5, 8, 2]
    // console.log(high(a));

let numbers = [4, 2, 5, 1, 3, [2]];
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);

//E1
let arrayh = [3, 5, 13];
for (let t in arrayh) {
    console.log(t, arrayh[t]);
    if (arrayh[t] % 2 !== 0 && t % 2 !== 0 && arrayh[t] % 2 !== 0 && t % 2 !== 0) {

        console.log(true);


    } else {
        console.log(false);
    }
}