
let i = 0
for (; ; i++) {
    // console.log(i);
    if (i > 10)
        break;
}

for (let j = 0; j < 10; j++) {
    if (j === 4)
        continue;
    // console.log(j);
}

outer: for (let m = 0; m < 10; m++) {
    inner: for (let l = 0; l < 10; l++) {
        if(l === 2 ) break outer;
        console.log(m , l);
    }
}



