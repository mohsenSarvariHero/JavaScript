//exam1

function newDate(date) {
    const stringDate = date.toString();
    const finalDate = stringDate.slice(0, 4) + "/" + stringDate.slice(4, 6) + "/" + stringDate.slice(6, 8); //solve2 
    /* const outputDate = '"' + finalDate + '"'; //solve2 
     console.log(outputDate.trim()); //solve2*/
    //const finalDate = stringDate[0] + stringDate[1] + stringDate[2] + stringDate[3] + "/" + stringDate[4] + stringDate[5] + "/" + stringDate[6] + stringDate[7]; //solve1
    //const outputDate1 = '"' + finalDate1 + '"'; //solve1
    //console.log(outputDate.trim()); //solve1
    return finalDate;

}
console.log("E1");
console.log("test1 : ");
console.log(13980313);
console.log(newDate(13980313)); //"1398/03/13"
console.log("test2 : ");
console.log(14000313);
console.log(newDate(14000313)); //"1400/03/13"
console.log("test3 : ");
console.log(13700503);
console.log(newDate(13700503)); //"1370/05/03"


console.log("*********************************************************");
//exam 2

function convert(str) {
    // another sole according to your advice
    let convertFirst = str.replace(/m/i, "000000").replace(/k/i, "000");
    convertFirst = Number(convertFirst);
    return (convertFirst);


    //my solve

    /* let convertFirst = str.replace(/m/i, '000000');
     let convertSecond = convertFirst;
     let result = convertSecond.replace(/k/i, '000');

    return result;*/

}
console.log("E2");
console.log("test1 : ");
console.log("2M");
console.log(convert("2M")); //2000000
console.log("test2 : ");
console.log("5k");
console.log(convert("5k")); //5000
console.log("test3 : ");
console.log("8m");
console.log(convert("8m")); //8000000


console.log("*********************************************************");

//exam 3
function reConver(number) {
    // another sole according to your advice

    let reconvertFirst = number.toString();
    let result = reconvertFirst.replace('000000', 'm').replace('000', 'k'); // or  /000000/ and /000/
    return result;

    //my solve
    /*console.log(number);
    let reconvertFirst = number.toString();
    let reconvertSecond = reconvertFirst.replace('000', 'k');
    reconvertSecond = reconvertSecond.replace('k000', 'm');
    console.log( reconvertSecond );*/
}
console.log("E3");
console.log("test1 : ");
console.log(2000);
console.log(reConver(2000)); //"2k"
console.log("test2 : ");
console.log(5000000);
console.log(reConver(5000000)); //"5m"
console.log("test3 : ");
console.log(8000);
console.log(reConver(8000)); //"8k"

console.log("*********************************************************");
//exam4
function Security(email) {
    let currentEmail = email;
    const place = currentEmail.indexOf('@'); //const 


    // console.log(place);

    let hide = currentEmail.slice(0, 3) + "..." + currentEmail.slice(place);
    return hide;
}
console.log("E4");
console.log("test1 : ");
let email = "Mohsen_sarvarimadreza@yahoo.com";
//let place = email.indexOf('@');
console.log(email);
console.log(Security(email));
console.log("test2 : ");
email = "aaaa@aol.us";
//place = email.indexOf('@');
console.log(email);
console.log(Security(email));
console.log("test3 : ");
email = "ahmadreza@gmail.com";
//place = email.indexOf('@');
console.log(email);
console.log(Security(email));



/*let p = "jhgfdserytts@tdfg";
let d = p.slice(p.indexOf('@'));
console.log(d);*/