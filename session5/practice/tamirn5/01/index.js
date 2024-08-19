'use strict'
// Only change code below this line
function translate(str) {
    for (let char of str) {
        if (!(char == Number(char))) {

            let place = char.charCodeAt();
            if (place <= 109) {
                let change = String.fromCodePoint(place + 13);
                str = str.replace(char, change);
            } else {
                let change = String.fromCodePoint(place - 13);
                str = str.replace(char, change);
            }
        }

    }
    return str;
}
console.log(translate("mohsen"));
console.log(translate("abcd"));
console.log(translate("alireza"));
console.log(translate("part2021"));