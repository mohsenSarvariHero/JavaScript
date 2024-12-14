console.log("objects")

const products = {
    name : "socks",
    price : 1001
};

console.log(products)
console.log(products.name)
console.log(products.price)
products.name = "cotton socks"
console.log(products.name)
console.log(products.name)

products.newproperty =  true

console.log(products)

delete products.newproperty;

console.log(products['name'])
console.log(console.log)


console.log("exercises")

function printContent(){
    window.print()
}

const newObject= {
    id : 2,
    fun : function hello(){
        console.log("hello from method of newObject")
    },
    number : [42 , 25 , 36],
    name : {
        id : 1 ,
        name : "mohsen",
        ['countery-city'] : "Iran-Tehran"
    }

}
console.log(newObject)
console.log(newObject.fun)
console.log(newObject.fun())
console.log(newObject.name)
console.log(newObject.number)

newObject.adding = ['12','ali']
console.log(newObject)

delete newObject.adding 
console.log(newObject)

console.log( console.log())

const newcopy = {

}
console.log("here")
let i = 0;
for (i in newObject) {
    console.log(i + ": " +newObject[i])
    newcopy[newObject[i]] = i
    
}
console.log(newcopy["2"])


JSON.stringify(newObject)
const jsonformat = JSON.stringify(newObject)
console.log("json : " + jsonformat)
console.log(JSON.stringify(newObject)["name"])
console.log(typeof JSON.stringify(newObject))

const jsformat = JSON.parse(jsonformat)
console.log(jsformat)

console.log("hello".length)
console.log("hello".toUpperCase())
const strings = "hello".split('')
console.log(strings)
console.log(strings.join(''))


const newobject1 = {
    id : 3,
    message : " hello "
};

console.log(newobject1);

const newobject2 = newobject1;

console.log(newobject2);

newobject2.message = "change"

console.log(newobject1)
console.log(newobject2)

const object3 = {
        id : 3,
    message : "change"
}
console.log(object3)
// compare refrencess
console.log( object3 === newobject1)
console.log( newobject2 === newobject1)


const object4 = {
    id : 3,
    message : "change",
    price : 45
}
// property name equal = destructuring
// const message = object4.message;
const{message  , price} = object4
console.log(message)
console.log(price)

const object5 = {
    //message : message
    message,
    //shorthand method syntax
    // method : function func1(){
    //     console.log("method")
    // }

    method (){
        console.log("method")
    }
}

console.log(object5)
object5.method()