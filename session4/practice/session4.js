//E3 100%
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
//E2 100%
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
    // for (let v in s) {
    //     console.log(s[v]);
    // }
    //return s; how to show the element in array in oneline---->use array.join()
    return s.join("");


}
console.log(multi(9119));
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

//E1 100%
let arrayh = [2, 1, 12, 5, 12, 7, 10];
// let arrayh2 = [];
let arrBoolean = [];
let item;
let resSpecial;

function specialArr(arrSpecial) {
    arrBoolean = [];
    for (item in arrSpecial) {
        if (item % 2 == 0 && arrSpecial[item] % 2 == 0 || item % 2 !== 0 && arrSpecial[item] % 2 !== 0) {
            arrBoolean.push(true);
        } else {
            arrBoolean.push(false);
        }
    }
    //console.log(arrBoolean);
    resSpecial = arrBoolean.every((element) => {
        if (element == true) {
            return true;
        } else {
            return false;
        }
    })
    return resSpecial;
}
let arrayh1 = [0, 1, 2, 3, 4, 5]
let arrayh2 = [1, 1, 2, 3, 4, 5]
let arrayh4 = [2, 1, 2, 3, 4, 5]
console.log(specialArr(arrayh));
console.log(specialArr(arrayh1));
console.log(specialArr(arrayh2));
console.log(specialArr(arrayh4));
// for (let t in arrayh) {
//     console.log(t, arrayh[t]);
//     if (arrayh[t] % 2 !== 0 && t % 2 !== 0 || arrayh[t] % 2 == 0 && t % 2 == 0) {

//         //console.log(true);
//         arrayh2.push(true);


//     } else {
//         //console.log(false);
//         arrayh2.push(false);
//     }
// }
// console.log(arrayh2);

// let res = arrayh2.every((item) => {
//     if (item == true) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(res);
//E4
let arrE4 = [2, 5, 6, 1, [4]];
let i4;
let E4
let dd;
// for (i4 in arrE4) {
//     if (Array.isArray(arrE4[i4])) {
//         E4++;
//         dd = (arrE4[i4]);
//     }
// }
// arrE4.sort(function(a, b) {
//     if (Array.isArray(dd))
// });
// console.log(arrE4);
function sortArray(arr) {

    arr.sort((a, b) => {
        if (Array.isArray(a) && Array.isArray(b)) { return 5; }
        // else if (Array.isArray(a) || Array.isArray(b)) return a[0] - b[0];
        else { return a - b; }
    });
    return arr;
}
console.log(sortArray([5, 7, 2, [1], 5, [3]]));

function sortArray(arr) {
    return arr
        .map(a => Array.isArray(a) ? sortArray(a) : a)
        .sort((a, b) => {
            if (Array.isArray(a) && Array.isArray(b)) return a.length - b.length;
            else if (Array.isArray(a)) return 1;
            else if (Array.isArray(b)) return -1;
            else return a - b;
        });
}

const input2 = [2, 4, 2, 6, 1, [1], 5];

const result = sortArray(input2);

console.log(result);
var input1 = [2, 4, 2, 6, 1, [4, 2, 1],
    [0, 2, 1, 6, [2, 1],
        [1]
    ],
    [1], 5
];

function deepSort(data) {
    data.sort((a, b) => !Array.isArray(b) - !Array.isArray(a) || a - b || a.length - b.length)
    data.forEach(e => Array.isArray(e) && deepSort(e))
}

console.log(deepSort([1, 5, 2, [3]]));

console.log(JSON.stringify(input1));