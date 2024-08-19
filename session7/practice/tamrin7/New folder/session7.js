'use strict';
//tamrin
const changeColor = (color, delay, doNext) => {

    setTimeout(() => {
        document.body.style.backgroundColor = color
        if (doNext) {
            doNext()
        }

    }, delay)
}

const colorPromise = () => {
    return new Promise((solve, reject) => {
        setTimeout(() => {
            // const resault = Math.random() > 0.5 ? true : false;
            if (true) {
                solve("solve");
            } else {
                reject('reject');
            }

        }, 1000)
    })
}



colorPromise()
    .then(() => {
        changeColor('red', 1000);
        return colorPromise();
    })
    .then(() => {
        changeColor('blue', 1000)
        return colorPromise();
    })
    .then(() => {
        changeColor('orange', 1000)
        return colorPromise();
    })
    .then(() => {
        changeColor('gray', 1000)
        return colorPromise();
    })
    .then(() => {
        changeColor('khaki', 1000)
        return colorPromise();
    })
    .catch(() => {
        console.log('stop');
    })

// colorPromise().then((res) => {
//     console.log(res);
//     changeColor('red', 1000, () => {
//         changeColor('blue', 1000, () => {
//             changeColor('orange', 1000, () => {
//                 changeColor('grey', 1000, () => {
//                     changeColor('khaki', 1000)
//                 })
//             })
//         })
//     })
// }).catch((e) => {
//     console.log(e);
// })