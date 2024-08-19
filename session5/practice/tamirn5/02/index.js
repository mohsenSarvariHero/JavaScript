'use strict'
// Only change code below this line
let parent = document.querySelector(".grid-container");
console.log(parent.children);

for (let item of parent.children) {
    item.addEventListener('click', () => {
        let x = Math.random() * 255;
        let y = Math.random() * 255;
        let z = Math.random() * 255;
        item.style.backgroundColor = `rgb(${x},${y},${z})`;
    })
}