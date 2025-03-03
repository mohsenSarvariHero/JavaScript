// and = && / or = || / not = !

const temp = 40;

// if(temp > 0 && temp <= 30){
//     console.log("good")
// }else{
//     console.log('warm')
// }


// if(temp <= 0 || temp > 30){
//     console.log("bad")
// }else{
//     console.log('good')
// }


// const isCold = true;
// typeof !true;
// if(isCold){
//     console.log("it is cold")
// }else{
//     console.log("it is not cold")
// }

const isCold = true;
typeof !true;
if(!isCold){
    console.log("it is not cold")
}else{
    console.log("it is  cold")
}

//= assign  -  == compare value - === compare value and datatype -- != not equall - !== 

//==

const age = 24 ; 
// if(age == "24"){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }


// if(age === "24"){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }

// if(age === 24){
//     console.log("the age is 24")
// }else{
//     console.log("age not 24")
// }

// if(age != '24'){
//     console.log("that is not 24")
// }else{
//     console.log("age is 24")
// }

// if(age !== '24'){
//     console.log("that is not 24")
// }else{
//     console.log("age is 24")
// }

//operator => * - / + ; operand = values

let students = 25;

students = students + 1 ;
students = students - 1 ;
students = students * 2 ;
students = students / 2 ;

students = students ** 2;
students = students ** 3;

students = students % 2 ;
students = students % 3 ;

//augmentant

students  += 1;
students  += 2;
students  -= 2;
students  *= 2;
students  /= 2;
students  **= 2;
students  %=2;

//

students++ ; //+=1
students-- ; //-=1

//prority () , exponents , multipilication & division & module , addition & subtractions

let results = 1 * 4 + 5 * 2 ** 2 / 12;
