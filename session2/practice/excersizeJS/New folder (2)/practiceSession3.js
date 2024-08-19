const numbers = [2, 3, 9, 12, 15, 3, 1];
let max = 0;
for (const num of numbers) {
    if (num > max) {
        max = num;
    }

}

console.log(max);