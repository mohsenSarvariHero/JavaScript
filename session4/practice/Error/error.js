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
    return s;


}
console.log(multi(919));