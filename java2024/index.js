console.log("hello new version 2024")

// window.onload = function() {
//     alert("Welcome");
// };

let Quantity = 0
function show(){
    console.log(`Cart Quantity : ${Quantity}`)
}

function AddCart(){
    Quantity = Quantity + 1
    console.log(Quantity)

}
function increaseTwo(){
    Quantity = Quantity + 2
    console.log(`Cart Quantity : ${Quantity}`)

}
function increaseThree(){
    Quantity = Quantity + 3
    console.log(`Cart Quantity : ${Quantity}`)

}

function reset(){
    Quantity = 0 
    console.log("Cart was reset to Zero")
}