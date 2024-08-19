//E1


function middle(first, second) {
    let array = [];
    for (let i = first + 1; i < second; i++) {
        array.push(i);
    }
    return array;
}
console.log(middle(1, 5));
console.log(middle(3, 8));
console.log(middle(10, 15));

console.log('***********************************************');

//console.log(array);

//E2
function repeat(arr) {
    const result = Object.entries(
        arr.reduce((previous, current) => {
            if (previous[current] === undefined) previous[current] = 1;
            else previous[current]++;
            return previous;
        }, {})).reduce((previous, current) => (current[1] >= previous[1] ? current : previous))[0];
    return result;
}
let input = [1, 2, 3, 4, 5, 6, 7, 4];
console.log(repeat(input));
let input1 = [1, 1, 1, 2, 3, 4, 5, 6, 7, 4];
console.log(repeat(input1));

console.log("***********************************************");
//E3
let arr = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

function sortArray() {
    let arr2 = [];
    for (const item of arr) {
        for (const elem of item) {
            arr2.push(elem);
        }
    }

    arr2.sort(function(a, b) {
        return b - a;
    })
    return (arr2);
}
console.log(sortArray(arr));
console.log('**********************************');

//E4


Array.prototype.unique = function() {
    let a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

let array1 = [12, 15, 2];
let array2 = [12, 13, 14, 15];

let array3 = array1.concat(array2).unique();
console.log(array3);

let array4 = ['ali', 'reza', 15, 2];
let array5 = [12, 13, 14, 15, 'reza', 'mohsen'];

let array6 = array4.concat(array5).unique();
console.log(array6);