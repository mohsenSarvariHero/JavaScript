// console.log("advanced Fun")
// //hoisting 
// function greeting(){
//     console.log("hello")
// }

// greeting()


// const fun1 = function greeting(){
//     console.log("hello")
// }

// console.log(fun1)


// //anynomus functions

// const fun2 = function (){
//     console.log("hello")
// }

// console.log(fun2())
// fun2()


// const obj2 = {
//     num : 2 ,
//     fun : function (){
//         console.log("hello3")
//     }
// }
// obj2.fun()

// function run(params){
//     params()
// }

// run(function(){
//     console.log("hello4")
// });

// const newF = function(){
//     console.log("hello5")
// }
// newF()
// //Asynchronous : won't wait 
// setTimeout(function (){
//     console.log("time Out")
//     console.log("time Out2")
// }, 2000)

// function repeate(){
//     setTimeout(function (){
//         console.log("time Out")
//     }, 5000)
// }
// repeate()

// setTimeout(repeate, 2000)

// console.log("next Line")

// //synch  
// setInterval(function(){
//     console.log("interval")
//     console.log("interval2")
// }, 1000)

// console.log("setInterval")
// console.log("setInterval2")
// console.log("setInterval2")
// console.log("setInterval2")
// console.log("setInterval2")
// console.log("setInterval2")


[12,36,45].forEach(function (value, index){
    console.log(index ,":", value)
})

const  arrowfunction = ()=>{
    console.log("hello")
}
arrowfunction()

const object2 = {
    method : ()=>{

    },
    method(){

    }
}
const evLis =()=>{
    console.log("click")
} 

const elem = document.querySelector(".js-btn")
elem.addEventListener('click', evLis);

elem.removeEventListener('click',evLis);
elem.addEventListener('click', ()=>{
    console.log("click2")
});

console.log([1,-3,5].filter((value , index)=>{
    if(value >= 0){
        return true
    }
    
}));

console.log([2,5,6].map((value , index)=>{
    return value +1
}))