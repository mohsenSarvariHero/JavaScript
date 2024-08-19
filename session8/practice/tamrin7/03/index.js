'use strict'
// Only change code below this line
function uniqe(length, allow) {
    let array1 = [];
    let array2 = [];
    let totall;
    for (let i = 0; i < length; i++) {
        let num = parseInt(Math.random() * (57)) + 65;
        array1.push(num);
    }
    //console.log(array1);
    for (let el of array1) {
        let char = String.fromCodePoint(el);
        array2.push(char);
    }
    //console.log(array2);
    let resault = array2.join('');

    let regex = /^[a-z0-9]+$/i;
    let strArr = [];
    let resArray = [];
    if (regex.test(resault)) {
        resault = resault.toLowerCase();
        strArr = resault.split("");
        if (allow == "no") {
            for (let i of strArr) {
                if (!(resArray.includes(i.toLowerCase()))) {
                    resArray.push(i);
                }
            }
            // console.log(resArray);
            totall = resArray.join('');

        } else {
            totall = strArr.join('');
            // for (let i of strArr) {
            //     if (resArray.includes(i)) {
            //         resArray.push(i);
            //     }
            // }
            // console.log(resArray);
            // totall = resArray.join('');

            //     return "invalid input--->number or alpha"
            // }
            // const resault = resArray.join('');
            // return resault;
        }
    } else {
        totall = 'invalid input'
    }
    return totall;
}
console.log(uniqe(8, "no"));
console.log(uniqe(12, "no"));
console.log(uniqe(5, "no"));
console.log(uniqe(6, "no"));
console.log(uniqe(6, "yes"));
console.log(uniqe(8, "yes"));
console.log(uniqe(12, "yes"));
console.log(uniqe(5, "yes"));
console.log(uniqe(8, "yes"));

// console.log(uniqe("ewee1255ghyh"));