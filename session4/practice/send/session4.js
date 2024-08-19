//E1 100%
let arrayh = [2, 1, 12, 5, 12, 7, 10];

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
console.log(specialArr([2, 7, 4, 9, 6, 1, 6, 3]));

console.log('******************************');
//E2

let x;
let y;
let i;
let z;
let resultE3 = [];


function multi(num) {
    resultE3 = [];
    x = num;
    y = x.toString();
    for (i in y) {
        z = y[i] * y[i];
        resultE3.push(z);

    }

    return resultE3.join("");


}
console.log(multi(9119));
console.log(multi(222));


console.log('**************************');
//E3 
function reverseString(str) {
    str = str.toString();
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if (joinArray == str) {
        return true;
    } else {
        return false;
    }

}

console.log(reverseString("non"));
console.log(reverseString("none"));
console.log(reverseString(152));

console.log(reverseString(9119));
console.log('************************');
//E4 NoArray.isArray()  50%


let arr = [1, 5, 8, 2]
    // console.log(high(a));

let numbers = [4, 2, 5, 1, 3, [1],
    [3]
];
numbers.sort(function(a, b) {
    if (Array.isArray(a)) {
        a.sort(function(a, b) {
            return a - b;
        });
    } else {
        return a - b;
    }

});
console.log(numbers);