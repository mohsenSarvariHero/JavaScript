

let stars = "********************************";
let tabs = "                                  ";
let n = 9;


for (let index = 1; index <= n; index+=2) {
    console.log(tabs.substr(0 , (n-index)/2 ) + stars.substr(0 , index))
}
for (let index = n-2; index > 0; index-=2) {
    console.log(tabs.substr(0 , (n-index)/2 ) + stars.substr(0 , index))
}

let n = 25;
let m = 4;
let Prime;
outer: for (let index = 0; index < m; index++) {
    
    Prime = true;
    if (n === 1) {
        Prime = false;
        break outer;
    }
    else if (n === 2) {
        Prime = true;
        break outer;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                Prime = false;
                break outer;
            }
        }
    }
    console.log(n , Prime);
    n = Math.floor(n / 10);
}
