'use strict'
// Only change code below this line
const change = document.querySelector("#action-button");
change.addEventListener('click', () => {
    const state = document.querySelector("#status");
    state.innerHTML = 'Please Wait';
    const resault = () => {
        return new Promise((solve, reject) => {
            setTimeout(() => {
                const chance = Math.random() > 0.1 ? true : false;
                if (chance) {
                    solve("you are a winner");

                } else {
                    state.innerHTML = reject("not today");
                }
            }, 10000)

        })
    }
    resault().then((res) => {
        console.log(res);
        state.innerHTML = res;
    }).catch((e) => {
        console.log(e);
        state.innerHTML = e;
    })
})