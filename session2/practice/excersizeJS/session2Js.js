 //E1


 // let input1 = "Lorem ipsum dolor sit amet, ipsum adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ipsum felis, ipsum nec, pellentesque eu, ipsum quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, ipsum ipsum, vulputate eget, arcu. In enim justo, rhoncus ut";
 // let input2 = "ipsum"
 // let lengthSen = input1.length;
 //console.log(lengthSen);
 // let lengthWord = input2.length;
 //console.log(lengthWord);
 // let count = 0;
 //let str = input1.indexOf('ipsum');
 //console.log(str);
 //let offset = 0;
 //offset = str + lengthWord;
 // let str2;
 //console.log(str2);
 //count = 2;
 //E1 100%
 let input1 = "Lorem ipsum dolor sit amet, ipsum adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ipsum felis, ipsum nec, pellentesque eu, ipsum quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, ipsum ipsum, vulputate eget, arcu. In enim justo, rhoncus ut";
 let input2 = "ipsum"

 function find(input, word) {

     let lengthSen = input.length;
     let lengthWord = word.length;
     let i = 0;
     let offset = 0;
     let place;
     let count = 0;
     while (i < lengthSen) {
         place = input.indexOf(word, offset);
         offset = place + lengthWord;
         i = offset;
         if (place < 0) {
             break;
         }
         count++;

     }
     return count;
 }
 console.log(find(input1, input2));
 // while (offset = 0 < input1.length) {
 //     let offset = 0;
 //     str2 = input1.indexOf('ipsum', offset);
 //     offset = str2 + lengthWord;
 //     count++;
 //     return count;
 // }
 // console.log(count);
 // let i = 0;
 // for (offset = 0; offset < lengthSen; i++) {
 //     str2 = input1.indexOf('ipsum', offset);
 //     offset = str2 + lengthWord;
 //     console.log(i);
 // }
 console.log('*******************************************');
 //E2
 //"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{12,})[0-9a-zA-Z]{8,}"
 function hard(pass) {
     let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{12,})[0-9a-zA-Z]{8,}");
     //  const found = paragraph.match(mediumRegex);
     //  console.log(found);
     if (pass.match(mediumRegex)) {
         return (true);
     } else {
         return (false);
     }
 }
 console.log(hard('zxcvbnmllkjhhgA'));

 console.log('*******************************************');
 //E4
 function Omit(obj1, obj2) {
     let omitNull = obj => {
         Object.keys(obj).filter(k => obj[k] === null).forEach(k => delete(obj[k]));
         Object.keys(obj).filter(k => obj[k] === false).forEach(k => delete(obj[k]));
         Object.keys(obj).filter(k => obj[k] === '').forEach(k => delete(obj[k]));
         Object.keys(obj).filter(k => obj[k] === undefined).forEach(k => delete(obj[k]));

         return obj
     }

     const result = {...omitNull(obj1), ...omitNull(obj2) }

     return (result);
 }
 const obj1 = { a: 1, b: '', c: [], d: null }
 const obj2 = { a: 2, b: null, d: 1 }
 console.log(Omit(obj1, obj2));
 console.log('**********************************');
 //E5 
 const obj = {
     firsName: 'reza',
     lastName: 'rezaee',
     age: 30
 };

 function reverse(object) {
     let obj2 = {};
     for (key in object) {
         obj2[object[key]] = key;
     }
     return (obj2);
 }
 console.log(reverse(obj));





 /*let obj2 = {};
 for (key in obj) {
     obj2[obj[key]] = key;*/



 //console.log(key + ":" + obj[key]);
 // let change;
 // change = obj[key];
 //key = change;
 //key = obj[key];
 //obj2.keys = change;
 //key = change;
 //obj[key] = key; //important
 ///key = change;


 //}

 // //E2
 // let string = "4581lkkkkjhbv8 ";
 // let regexP = "[0-9A-Za-z]+(st|nd|rd|th)" + " " + "floor";
 // let isMatching = String.matches(regexP);
 // if (isMatching = true) {
 //     console.log(true);
 // }
 //E4
 // let obj1 = {
 //     first: 'null',
 //     second: false,
 //     third: true,
 // }
 // let obj2 = {
 //     first: 'null',
 //     second: true
 // }
 // if (obj1[key] = '')
 //  const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
 //  const regex = /[A-Z , 1-9]/i;
 //  const found = paragraph.match(regex);

 //  console.log(found);