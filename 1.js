console.log("mohsen");
console.log(2+2);
console.log(2+2);
// comments

let name = "mohsen sarvari";

const lname = "reza"//you can not edit this

//lname = "ali" //error
console.log(name)

setTimeout(() => {
    console.log("hello")
},3000)
// setInterval(() => {
//     console.log("hello")
// },3000)
let stoped = setInterval(() => {
    console.log("hello")
},3000)

setTimeout(()=>{
    clearInterval(stoped)
    console.log("finish")
},15000)