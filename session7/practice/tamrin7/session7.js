'use strict';
//tamrin
const colorPromise = (color, delay) => {
    return new Promise((solve, reject) => {
        setTimeout(() => {

            if (true) {
                solve(document.body.style.backgroundColor = color);
            } else {
                reject("stop")
            }

        }, delay)
    })

}

colorPromise("red", 1000)
    .then(() => {
        return colorPromise("blue", 1000);
    })
    .then(() => {
        return colorPromise("orange", 1000);
    })
    .then(() => {
        return colorPromise("gray", 1000);
    })
    .then(() => {
        return colorPromise("khaki", 1000);
    })

.catch(() => {
    console.log('stop');
})