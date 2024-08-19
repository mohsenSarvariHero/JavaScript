// 'use strict'
// this

// console.log(this);

// function fun1(){
//     // i = 10;
//     return this
// }


// console.log(fun1());

// const obj1 = {
//     name: 'obj1',
//     sayHello: function () {
//         return {
//             sayHello2: ()=> {
//                 console.log(this);
//             }
//         };
//     }
// }

// obj1.sayHello().sayHello2();

// function logThis() {

//     let fun2 =  ()=> {
//         console.log(this);

//     }

//     fun2();
// }

// logThis();


let fun1 = function() {
    console.log(this.name);
}


// fun1();


let obj1 = {
    name: "obj1"

}
let obj2 = {
    name: "obj2"
}

obj1.f = fun1
obj2.f = fun1

// obj1.f()
// obj2.f()

// console.log(this);


const obj3 = {
    f : function(){
        let a = ()=> console.log(this);
        a();
    }
}


obj3.f()




