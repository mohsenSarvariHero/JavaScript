//E1
console.log('a'.charCodeAt());
console.log(String.fromCodePoint(97 + 13));
console.log('b'.charCodeAt());
console.log(String.fromCodePoint(98 + 13));

console.log('c'.charCodeAt());
console.log('d'.charCodeAt());
console.log('e'.charCodeAt());
console.log('f'.charCodeAt());
console.log('g'.charCodeAt());
console.log('h'.charCodeAt());
console.log('i'.charCodeAt());
console.log('m'.charCodeAt());

//let string = "mohsen";
//let string = "abcd";
//et string = "alireza";
let string = "p4kart2021";
//let string = "mohsen";
//let string = "mohsen";
for (let i of string) {
    if (!(i == Number(i))) {
        let code = i.charCodeAt();
        console.log(code);
        if (code <= 109) {
            let other = String.fromCodePoint(code + 13);
            console.log(other);
            string = string.replace(i, other);
        } else {
            other = String.fromCodePoint(code - 13);
            string = string.replace(i, other)
        }
    }

}
console.log(string);
// console.log('r'.charCodeAt());
// console.log(String.fromCodePoint(114 - 13));

// console.log('e'.charCodeAt());
// console.log(String.fromCodePoint(101 + 13));
let dd = '2020';
console.log(typeof dd);
let ff = +dd;
console.log(typeof ff);
console.log('2l' == 2);
console.log(typeof '2' == typeof 2);

console.log('function*******************');

function translate(str) {
    for (let char of str) {
        if (!(char == Number(char))) {

            let place = char.charCodeAt();
            if (place > 109) {
                let change = String.fromCodePoint(place - 13);
                str = str.replace(char, change);
            } else if (place <= 109) {
                let change = String.fromCodePoint(place + 13);
                str = str.replace(char, change);
            }
        }

    }
    return str;
}
console.log(translate("mohsen"));
console.log(translate("abcd"));
console.log(translate("alireza")); //چرا بقیه درسته ولی این تو دو تا از حرفاش اشتباه؟!!!
console.log(translate("part2021"));


console.log('**********************');

console.log('r'.charCodeAt());
console.log(String.fromCodePoint(114 - 13));
console.log('*****************');

function d() {
    var sta = "2011/02/20 00:00:00 ";
    var currentTime = new Date();
    var startDate = new Date(sta)

    var dif = startDate - currentTime;
    var s = 1000;
    var m = 1000 * 60;
    var h = 1000 * 60 * 60;
    var d = 1000 * 60 * 60 * 24;

    var days = Math.floor(dif / d);
    dif -= days * d;
    if (dif <= 0) dif = 0;

    var hours = Math.floor(dif / h);
    dif -= hours * h;
    if (dif <= 0) dif = 0;

    var minutes = Math.floor(dif / m);
    dif -= minutes * m;
    if (dif <= 0) dif = 0;

    var seconds = Math.floor(dif / s);
    document.getElementById('d').innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval("d()", 1000);