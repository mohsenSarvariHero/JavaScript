let arr1 = ['apple', 'benana', 'orange', 'watermelone']
let arr2 = [1, 2, 3, 4, 6]


const a = arr1.some((element) =>{
    return element.length > 20
})

const b = arr1.every((element)=>{
    return element.length > 2
})


// console.log(a);
// console.log(b);


let acc = arr2.reduce((acc, element)=>{
    return acc + element
} , 0)

console.log(acc);




