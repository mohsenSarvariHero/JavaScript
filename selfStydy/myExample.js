//E1 https://exercism.io/tracks/javascript/exercises/hello-world/solutions/8e31a066da5446a79e8167fc7db5596f
//show Hello World
const hellE1 = () => {
    return "Hello World";
};
console.log(hellE1());
//E2 
/*
Two-fer or 2-fer is short for two for one. One for you and one for me.

Given a name, return a string with the message:

One for name, one for me.
Where "name" is the given name.

However, if the name is missing, return the string:

One for you, one for me.
*/
// name if true mean string , not emptey or falsy --> '',nan,null fontVariantAlternates: 
//convert to boolean
function twoFer(name) {
    return name ? `One for ${name},one for me` : 'One for you, one for me.';
}
console.log(twoFer('ali'));
console.log(twoFer(' ')); //value true
console.log(twoFer('')); //value false

console.log('************or');

function twoFer2(name) {
    if (Boolean(name) === true) {
        return `One for ${name},one for me`;
    } else {
        return 'One for you, one for me.';
    }

}
console.log(twoFer2('mohsen'));
console.log(twoFer2(''));
console.log('********************or');

function twoFer3(name) {
    if (name) {
        return `One for ${name},one for me`;
    } else {
        return 'One for you, one for me.';
    }
}
console.log(twoFer3('sarvari'));
console.log(twoFer3(''));

//E3 Resistor Color
let colors = ['red', 'blue', 'green', 'black', 'white', 'yellow']

function findE3(colorsarr, color) {
    return `indexof ${color}` + '  ' + colorsarr.indexOf(color);
}
console.log(findE3(colors, 'green'));
console.log(findE3(colors, 'blue'));

console.log('***********************');
//E4 like E3
function findE4(colorsarr, color1, color2) {
    return colorsarr.indexOf(color1) + '' + colorsarr.indexOf(color2);
}
console.log(findE4(colors, 'blue', 'yellow', 'black'));
console.log('---------------solution');
// const COLORS = [

//     'black',
//     'brown',
//     'red',
//     'orange',
//     'yellow',
//     'green',
//     'blue',
//     'violet',
//     'grey',
//     'white'
// ];

// const decodedValue = (param) => {
//     return parseInt(colorCode(param[0]) + colorCode(param[1]));
// };


// const colorCode = (param) => {
//     return COLORS.indexOf(param).toString();
// };
// console.log(decodedValue(COLORS) + '' + colorCode('black'));

console.log('**********************************************');
//E5
let charArray; //["D","N","A"]
let newE5 = [];
let ElE5

function reE5(str) {
    newE5 = [];
    charArray = str.split(''); //not work charArray[E1E5]
    for (ElE5 of charArray) {

        if (ElE5 === "G") { ElE5 = "C" } //Note elseif mistake must be else if
        else if (ElE5 === "C") { ElE5 = "G" } else if (ElE5 === "T") { ElE5 = "A" } else if (ElE5 === "A") { ElE5 = "U" }

        newE5.push(ElE5)
        console.log(ElE5);

    }
    return newE5.join('');


}
console.log(reE5("DNA"));
console.log(reE5("RNA"));
console.log(charArray);

console.log('************************************************');
//E6

const age = (planet, sex) => {
    let multipliers = new Map();
    multipliers.set("mercury", 0.2408467);
    multipliers.set("venus", 0.61519726);
    multipliers.set("earth", 1.0);
    multipliers.set("mars", 1.8808158);
    multipliers.set("jupiter", 11.862615);
    multipliers.set("saturn", 29.447498);
    multipliers.set("uranus", 84.016846);
    multipliers.set("neptune", 164.79132);

    return planet + " " + parseFloat(parseFloat(sex / 31557600 / multipliers.get(planet)).toFixed(2));
}
console.log('planet+  +age:');
console.log(age('mercury', 700000000));
console.log(age('venus', 700000000));
console.log(age('earth', 700000000));
console.log(age('mars', 700000000));
console.log(age('earth', 700000000));
console.log(age('mars', 700000000));
console.log(age('jupiter', 700000000));
console.log(age('saturn', 700000000));
console.log(age('uranus', 700000000));
console.log(age('neptune', 700000000));

console.log('*****************solution');

// const age = (planet, sex) => {
//     let multipliers = new Map();
//     multipliers.set("mercury", 0.2408467);
//     multipliers.set("venus", 0.61519726);
//     multipliers.set("earth", 1.0);
//     multipliers.set("mars", 1.8808158);
//     multipliers.set("jupiter", 11.862615);
//     multipliers.set("saturn", 29.447498);
//     multipliers.set("uranus", 84.016846);
//     multipliers.set("neptune", 164.79132);

//     return parseFloat(parseFloat(sex / 31557600 / multipliers.get(planet)).toFixed(2));
// };
// console.log(age("mars", 1000000000));
console.log('***********************'); //https://exercism.io/tracks/javascript/exercises/pangram/solutions/c8517030db974d318c572396e14640c9
/*function pangram(pharase) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let pass = true;
    for (let char of alpha) {
        if (!pharase.toLowerCase().includes(char)) {
            pass = false;

        }
    }
    return pass;
}
console.log(pangram(' '));
const isPangram = (phrase) => {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let passes;
    for (let letter of alpha) {
        if (phrase.toLowerCase().includes(letter)) {
            passes = 123;

        } else {
            passes = true;
        }
    }
    return passes;
};
console.log(isPangram("mohsen"));*/
console.log('********************');
let ii;
let insert = 0;
let arra1 = [];

function arra(num) {
    for (ii = 0; ii < num; ii++) {
        ++insert;
        arra1.push(insert);

    }
    return arra1;
}
console.log(arra(5));
console.log('*********or');
let iii;
//let insert = 0;
let arra2 = [];

function arra5(num) {
    for (iii = 1; iii <= num; iii++) {
        //++insert;
        arra2.push(iii);

    }
    return arra2;
}
console.log(arra5(5));
console.log('*******************');
let inpuut1 = ["1, 3, 4, 8, 2, 2, 4", "2, 4, 10, 5, 8, 4"];
let inpuut2 = ["1, 5, 4, 8, 2, 2, 4, 10", "2, 4, 10, 5, 8, 4, 1"];

function findArrayy(setArr) {
    let list = setArr.map(str => str.split(", "));
    console.log(list);
    let firstList = list[0];
    let secondList = list[1];
    let setObject = {};
    let result = [];

    firstList.forEach(num => setObject[num] = true);

    secondList.forEach(num => {
        if (setObject[num]) {
            result.push(num);
            setObject[num] = false;
        }
    })
    result.sort(function(a, b) {
        return a - b;
    })
    if (result.length > 0) {
        return result.join(",");
    }

    return false;

}
console.log(findArrayy(inpuut1));
console.log(findArrayy(inpuut2));
console.log('****************************');

function Eternate(a, b) {
    let val = a + b < 4;
    return val ? 'Below' : "Over";
}
console.log(Eternate(4, 8));
console.log(Eternate(2, 1));
console.log('---------------');

function ternaryEs(login) {
    let message = 'message';
    let mes = (login === "Employee") ? `${message} = Hello ` : (login === 'Director') ? `${message} = Greeting` : (login === '') ? `${message} = No login!` : `${message}=''`;
    return mes;
}
console.log(ternaryEs('Director'));
console.log(ternaryEs('Employee'));
console.log(ternaryEs(''));
console.log(ternaryEs());

console.log('*****************');
/* 
1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.


*/

function validUser(str) {
    let length = str.length;
    let regex = /^[A-Za-z]\w+[A-Za-z0-9]$/;
    if (4 < length < 24) {
        let resault = regex.test(str);
        if (resault) {
            return true;
        } else {
            return false;
        }

    }
}
console.log(validUser("u__hello_world123"));
console.log(validUser("aa_"));
console.log(validUser("1mohsen_12"));
console.log(validUser("mohsen_12"));