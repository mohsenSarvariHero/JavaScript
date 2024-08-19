let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let arr3 = [];


function similar(arr1, arr2) {
    for (let item of arr1) {
        for (let item1 of arr2) {
            if (item == item1) {
                return arr3.push(item);
            }
        }
    }
}
console.log(similar(arr1, arr2));

function sim(arr1, arr2) {
    const final = [];
    arr1.foreach((e1) => arr2.foreach((e2) => {
        if (e1 == e2) {
            final.push(e1)
        }
    }));

}