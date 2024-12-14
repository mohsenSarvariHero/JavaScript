console.log("array")

const newArray = [1,2,3]
let typeA = Array.isArray(newArray)
console.log(typeof typeA)
console.log(typeof newArray)
console.log(typeA)
console.log(newArray.length)

newArray.push(100)
console.log(newArray)

// newArray.splice(0,1)
// newArray.splice(0,2)
console.log(newArray)

let sum = 0
for(let i = 0 ; i < newArray.length ; i++){
    sum = sum + newArray[i]
}
console.log(sum)


for(let i = 0 ; i < newArray.length ; i++){
    newArray[i] = newArray[i]+1
}
console.log(newArray)









function deleteI(id){
    // const buttonToDelete = document.querySelector(`button[onClick="deleteI(${id})"]`);

    // if (buttonToDelete) {
    //     const listItem = buttonToDelete.parentNode; // Get the parent <li> element
    //     listItem.remove(); // Remove the entire <li> element
    //     console.log(`Item with id ${id} deleted`);
    // }
    const index = inputArray.findIndex((item) => item.id === id)
    
    if(index !== -1 ){
        inputArray.splice(index , 1)
        console.log("delete")
    }
    show()
    
}
let inputValue = document.querySelector(".inputValue")
let inputDate = document.querySelector(".inputDate")

let inputArray = []
let showResult = document.querySelector(".showresultF")

function showInput(){
    
    //inputArray = [...inputArray,inputValue.value]
    const newItem = {
        id : Date.now(),
        date : inputDate.value ,
        text : inputValue.value
    }
    inputArray.push(newItem)
    inputValue.value=''
    show()
}

function show(){
    showResult.innerHTML = "";
    inputArray.forEach((item)=>{
        const {text , date} = item
        let newItem = document.createElement("li")
        newItem.innerHTML=`
        ${text} 
        ${date}
        <button onClick="deleteI(${item.id})"}">Delete</button>
        `
;
        showResult.appendChild(newItem)})
}


const arr1 = [1,2,3]
const arr2 = arr1

console.log(arr1)
arr2.push(5)
console.log(arr2)
console.log(arr1)

const arr3 = arr2.slice()
console.log(arr3)

arr2.push(10)
console.log(arr3)
console.log(arr2)

const [first  ,second ] = [2,5,6]
console.log(first)
console.log(second)