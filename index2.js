//if

//loop
console.log("js")
console.log("js")
console.log("js")

let i = 1;
while(i<=5){
    console.log("js");
    i = i+1;
}
console.log(i)



let j = 5;
while(j>=0){
    console.log("js");
    i--;
}

do{
    console.log('js');
    i++

}while(i<5)

for(let i=1;i<=5;i++){
    console.log("js")
    for(let k=0 ; k<5 ; k++){
        console.log("***")
    }
}

for(let i=0 ; i<8;i++){
    console.log("html", i);
    for(let j=0 ; j<=2 ; j++){
        console.log("inner")
    }
}
 
//odd , even

//
let array1 = ['html','css','js']

for(let i =0 ; i<array1.length;i++){
    console.log(array1[i]);
}

//break , continue

for(let i =0 ; i<=10;i++){
    if(i == 7){
        break;
    }
    console.log(i)
}

for(let i =0 ; i<=10;i++){
    if(i == 7){
        continue;
    }
    console.log(i)
}

//for in refrrencess  objects
//for of item just for array

const persons= {
    "name" : "mohsen",
    "lname" : "sarvari",
    "id"  : 1 
}
for(let key in persons){
    console.log(key);//name ...
    console.log(persons[key]);
} 

//for .. in array 
for(let item in array1){
    console.log(item);
    console.log(array1[item])
}
for(let item of array1){
    console.log(item);
    // console.log(array1[item])
}

let names = ["ali",'zahra','mohsen']

for(let name of names){
    console.log(name)
}
for(let name of names){
    if(name === 'mohsen'){
        break;
    }else {
        console.log(name)

    }
}

let name="mohsen";
for(let ch of name){
    console.log(ch)
}

