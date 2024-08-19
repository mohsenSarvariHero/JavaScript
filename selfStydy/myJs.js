'use strict';
//js is case sensitive
//null
console.log(!!null); /* !!=boolean */
console.log(typeof null); //error
console.log(Boolean(null));

console.log('***********************');
//undefined
let first; // const first; -->error must be declaration like:const first=0;
let a;
let b;
let c;
const second = (a, b) => {
    c = a + b;
    return c;
}
console.log(second(1, 5));
console.log(first);
console.log('****************************************');
//Math
console.log(Math.pow(4, 3));
//recursion & function pow()

let result;

function pow(num, tavan) {
    if (tavan === 0) {
        return 1;
    }
    result = num * pow(num, tavan - 1); // 2 * pow(2,2) =2* pow(2,1)=2*pow(2,0)=1-->2(2(2(1)))
    return result;
}
console.log(pow(4, 3));
console.log('------------------------------');
//without recursion 
function pow1(num, tavan) {
    let result = 1;
    for (let i = 0; i < tavan; i++) {
        result = result * num;
    }
    return result; //without wirte this undefined
}
console.log(pow1(2, 3));
console.log('*************************************');

let array = [];
let arrayReverse = [];
let str = 'mohsen'
for (let i of str) {
    console.log(i);
    array.push(i);
}
console.log(array);
console.log(array.join());
console.log(array.join(''));
arrayReverse = array.reverse();
console.log(arrayReverse);
console.log(arrayReverse.join());
console.log(arrayReverse.join(''));


console.log('*************************************');

let obj = {
    a: 12,
    b: 'mohsen',
    d: ''
};
console.log(obj['t']); //undefined
let obj2 = {}; //object >>>> use for in
for (let leter in obj) {
    obj2[obj[leter]] = leter;
}
console.log(obj2);
console.log('*************************************');

//Section1
let nameSection1 = 'Section1';
nameSection1 = 'Section2';
let NSection1 = 2 + 2;
console.log(nameSection1 + ' , \n' + `${NSection1}`);
console.log('nnnnnnnnn \t jjjjjjjjjjjjj');
console.log('\t' + 'mmmmmmmmm');
console.log('*************************************');
let NN = 2 + 2
console.log(` ${NN} hjkl`);
console.log('*************************************');
//factoriel
let resultFact;

function factoriel(num) {
    if (num == 0) {

        return 1;
    }
    resultFact = num * factoriel(num - 1);
    return resultFact
}
console.log(factoriel(5));
console.log(factoriel(4));
console.log(factoriel(3));


console.log(`${'fibo'}******************`);

let resFibo;
let val1Fibo;
let val2Fibo;
let i = 0;


function fibo(num) {
    val1Fibo = 0;
    val2Fibo = 1;

    for (i = 0; i < num; i++) {
        resFibo = val1Fibo + val2Fibo;

        val1Fibo = val2Fibo;
        val2Fibo = resFibo;


    }
    //return arrFibo;
    return (resFibo - 1);
}

console.log(fibo(3));
console.log(fibo(4));
console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(7));


console.log(`${'variable'}***************************`);

//pass by value section2
let nameSec2;
let adminSec2;
nameSec2 = 'john';
adminSec2 = nameSec2;
console.log(nameSec2 + '   ' + adminSec2);
console.log('----');
nameSec2 = 'mohsen';
console.log(nameSec2);
console.log(adminSec2);
adminSec2 = 'hero';
console.log(adminSec2);
console.log('****************************************');
const birth = '1359/25/02';
const age = code(birth);

function code(bir) {
    return bir.replace('1359', 1399)
}
console.log(birth);
console.log(age);

console.log('***************');
//the result of  compare is boolean 
let isBig = 5 > 2;
console.log(isBig);
console.log(4 > 5);
console.log(5 > 4);
console.log(4 === 4);
console.log('5' == 5); //true better use ===
console.log('5' === 5);
console.log(4 != 4);
console.log('ternary -------------------------------');
let isSmall = 4 < 2;
let isSmall2 = 2 < 5;


function ternary(Small) {
    return (Small ? 'yes->is smaller' : 'No->is not small');
}

console.log(isSmall + '  ' + 'that\'s mean\'s : ');
console.log(ternary(isSmall));
console.log(isSmall2);
console.log(ternary(isSmall2));

console.log('typeof****************************');
//type of return a string it can be with () or without ()
console.log(typeof 123);
console.log(typeof 'mohsen');
console.log(typeof true);
console.log(typeof object); //variable not declare
console.log(typeof Symbol("12"));
console.log(typeof(null)); //object -->mistake
console.log(typeof(NaN));
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof alert); //function

console.log('************************alert,confirm,prompt');
// alert('به نام خدا');
// let pro = prompt('what\'s your name?', 'name');
// alert(`hello ${pro}`);
// let conf = confirm('are you best?');
// if (conf) {
//     alert('that\'s grate');
// } else {
//     alert('strive');
// }
// alert(`${conf}`);

console.log('************************************string conversion');
let isBool = true;
console.log(typeof isBool);
let strCon = String(isBool); //convert to String
console.log(typeof strCon);
let isBool1 = 123;
console.log(typeof isBool1);
let strCon1 = isBool.toString(); //convert to String
console.log(typeof strCon1);

console.log('---------------number');
console.log('12' / '2'); //automaticlly convert to number 12 / 2 = 6
console.log('klkl' / '12');

let strNum = '1235';
console.log(strNum);
console.log(typeof strNum);
let Num = Number(strNum); //convert to Number 1235
console.log(Num);
console.log(typeof Num);
let strNum2 = ' 5421';
console.log(typeof strNum2);
let Num2 = +strNum2; //convert to Number
console.log(typeof Num2); //number 5421
console.log(+true);
console.log(Number(false));
console.log(+null); //number 0
console.log(Number(undefined)); //number NaN
console.log(typeof(Number(undefined)));

console.log('***********boolean'); //conver to Boolean
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(' ')); //space --> true
console.log(Boolean('jsjsa'));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean());
console.log(Boolean('')); //empty without space --> false becomes 0 and make error that Nan
console.log('************************math');
//- + * / % **
//- reverse and subtract
let x = 1;
let y = -x; //-1
console.log(x);
console.log(y);
//subtract
console.log(x - y); //1-(-1)=2
console.log('-------------%');
//% --> integer
console.log(8 % 2);
console.log(8 % 5);

console.log('*****************exponentiation'); //pow
console.log(2 ** 4);
console.log(3 ** 4);
console.log(Math.pow(2, 4));

console.log('***************like sqrt');
console.log(4 ** (1 / 2)); //Note write in parantes(1/2)
console.log(8 ** (1 / 3));

console.log('*****************+');
console.log(5 + 2);
console.log('mohsen' + 'sarvari'); //concat
let name = '  mohsen';
let lname = " sarvari  ";
let ageM = 20;
console.log('my name is' + name.concat(lname, `${ageM} years old`));
console.log(2 + 2 + 3 + 6);
console.log(2 + 3 + '2');
console.log(1 + '2' + 3 + 4 + 5);
console.log(1 + 3 + '2' + 3 + 4 + 5);

//automatically convert to number --->subtract , division
console.log(6 - '2'); //4
console.log('6' - 2); //4
console.log('8' - '2'); //6
console.log(8 / '2'); //4
console.log('16' / 8); //2
console.log('16' / '2'); //8
console.log('------------');
let a1 = 5;
a1 *= 5 + 5; //first 5+5 then a1*=10-->a1=a1*10//50
console.log(a1);
let a2 = 5
console.log(a2 * 5 + 5);
console.log('-----------------increament');
let a4 = 5;
a4++; //variable 
console.log(a4);
//console.log(5++);//error must be variable to increament
let count = 1;
console.log(++count); //2
let count1 = 1;
console.log(count1++); //1
console.log(2 + 5, 2 + 2);
let cc = (1 + 3, 5 + 6); //5+6=11
console.log(cc);
console.log('***********************'); //comparison convert to number
console.log('Z'.charCodeAt());
console.log('A'.charCodeAt());
console.log('a'.charCodeAt());
console.log('ا'.charCodeAt());
console.log("Z" > "A");
console.log('5' > 2); //true
console.log('5' > '8');
console.log('2' > '12'); //when both of them string convert to uniccode -->a.codecharAt() then convert to number
console.log(2 > '12'); //when one of them number both of them is number
console.log('2'.charCodeAt());
console.log('12'.charCodeAt());
console.log('********************ternary-if');
if (1) {
    console.log('exe');
}
if (0) {
    console.log('exe2');
} else {
    console.log('exe3');
}
let condi = 1 ? 'exe1 is run for true' : 'exe2 is run because exe1 flase';
console.log(condi);

function allow(age) {
    if (age < 10) {
        return 'you are kids';
    } else if (age < 20) {
        return 'you are young';
    } else if (age < 50) {
        return "you are adault";
    } else {
        return 'you are above 50 years old';
    }
}
console.log(allow(20));
console.log(allow(50));
console.log(allow(2));
console.log('************with ternary');
let ternaryresult;

function ternaryAllow(age) {
    return ternaryresult = age < 10 ? 'you are kids' : age < 20 ? 'you are young' : age < 50 ? 'you are adault' : 'you are above 50 years old';
}
console.log(ternaryAllow(50));
console.log(ternaryAllow(10));
console.log(ternaryAllow(5));
console.log('---------');

function ternaryIf(age) {
    return age < 20 ? 'you are young' : '';
}

function conditional(name) {
    if (frt) {
        return `hello ${name} you are younger`;
    } else {
        return `hello ${name} you are adault`;
    }
}
let frt = (ternaryIf(8));
//console.log(Boolean(frt));
console.log(conditional('mohsen'));
console.log('*************************');
//|| --> for evaluate convert to boolean but return the value -- find the first truthly and stop --when all of them are false return the last value
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
//console.log(Boolean(true));

console.log('' || '1' || 'string' || '55'); //return first true value -->1
console.log(false || '' || null || 0); //all of them false then return the last value
if (5 < 3 || 15 < 10 || "kkk") {
    console.log("helllo");
}

"12" || alert("not printed");
'' || console.log('this Printed');

//and && -->like OR(||) but return the first false 
console.log(true && false); //false
console.log(false && false); //false
console.log(false && true); //false
console.log(true && true); //true

console.log(null && 1 && 2); //null
console.log(' ' && 2 && 0); //0
console.log(' ' && 5 && 'yes'); //'yes'

if (20 < 30 && 10 < 20) {
    console.log('typed');
}

// next ! not return boolean reverse the boolean not rerturn the value
console.log(!"123"); //false
console.log(!''); //true
if (!'null') { //true reverse -->false
    console.log('that\' not exe');
}
if (!null) { //null ->false reverse -->true
    console.log('that\'s exe');
}
//Note !! like Boolean return the Boolean type
console.log(!!'kkkkk'); //boolean type true
console.log(!!''); //boolean type false
console.log(Boolean(''));
console.log(console.log(1) || '' || '123' || console.log("kj")); //123
console.log(console.log(1) && '' || '123' || console.log("kj")); //123
console.log(console.log(1) && '' && '123' && console.log("kj")); //undefined

console.log('***********task');
let sen = 2;
if (!(sen >= 14 && sen <= 90)) {
    console.log('not between 14-90');
} else {
    console.log('between 14-90');
}
console.log('------------');
let sen2 = 200;
if (sen2 <= 14 || sen2 >= 90) {
    console.log('not between 14-90');
} else {
    console.log('between 14-90');
}

console.log('-----------');
let user = prompt("who\'s you?", '');

if (user === "Mohsen") {
    let pass = prompt("write password", '');
    if (pass === 'Mohsen588479') {
        alert("Hello sir , Welcome");
    } else if (pass === '' || pass === null) {
        alert("Canceled");
    } else {
        alert("Wrong passWord");
    }
} else if (user === '' || user === null) {
    alert("Canceled")
} else {
    alert('I don\'t know you')
}
console.log('********************');
let aa = 'mohsen';
let bb = 'sarvari';
console.log(aa.concat(bb));
let df = "A B C";
let re = df.split(" ");
console.log(re);

let gh = 'apple';
let dk = gh.substr(1, 2);
console.log(dk);

let mk = 'mohsen';
let kh = "sarvari";
let nb = mk.concat(kh).toUpperCase();
console.log(nb);

console.log('*********************');
let reg = /abc/;
let fhg = 'salam kjabc djfi dlfk fk;d;;d,,;';
let fgh2 = 'salam ab csdr jkk,';
let cvf = fhg.match(reg);
let cvf2 = fgh2.match(reg);
console.log(cvf);
if (cvf) {
    console.log(true);
} else {
    console.log(false);
}
console.log(cvf2);
if (cvf2) {
    console.log(true);
} else {
    console.log(false);
}
console.log('--------------');
let reg2 = /ab*c/; //must be one a then 0 b or more then one c follow
//let min = 'mohs abbbbbccbfjccxd';//true
//let min = 'mkjh acnk';//true
let min = ' njdh anffv'
let hfd = min.match(reg2); //reg2.test(min);
console.log(hfd);
if (hfd) {
    console.log(true);
} else {
    console.log(false);

}

console.log('**************************');

// just use ?? for assign a default value to variables 
//return the first variable that has declared not return the null and undefined
let jf = null;
let dfc = undefined;
let dfcv;
let vdf = 'mohsen';
let bfg = 'sarvari';
//let htt = htt ? ? 100;
//console.log(htt);
//alert(dfcv ?? 'cccccc');

console.log('**********Loop');
//while  -- do while
let t = 0;
let looparr = [];

function loop() {
    while (t < 10) {
        looparr.push(t);
        t++;

    }


    // function ree(res) {
    //     return res;
    // }
    let res = looparr;
    //console.log(res);
    let ress = looparr.join("\n");
    return (ress);
}
console.log(loop());

console.log('-------');

let yy = 10;
let ff = [];

function dec() {
    while (yy) {
        ff.push(yy);
        yy--;
    }
    let hjk = ff.join("\n");
    return hjk;
}
console.log(dec());
console.log('-------');
//do while
let ip = 5;
do {
    console.log(ip);
} while (0)

console.log('************for');
//for loop
let objloop = {};
let looparrr = [];

function forloop() {
    let r;
    for (r = 0; r < 10; r++) {
        objloop[r] = true;
    }
    for (let e1 in objloop) {
        looparrr.push(e1);

    }
    let rt = looparrr.join("\n");
    return rt;

}
console.log(forloop());

let objloop2 = {};
let looparrr2 = [];

function forloopp() {
    let r1;
    for (r1 = 9; r1 > 0; r1--) {
        // if (r1 == 3) {
        //     continue;
        //break;
        // }
        looparrr2.push(r1);
    }
    return (looparrr2.join("\n"));
    // for (r1 = 9; r1 > 0; r1--) {
    //     objloop2[r1] = true;
    // }
    // for (let e1 in objloop2) {
    //     looparrr2.push(e1);

    // }
    // let rt = looparrr2.join("\n");
    // return rt;

}
console.log(forloopp());

console.log('******************save number in object return');

let funcobj = function() {
    let arr = [];
    let obj = {};
    for (let i = 10; i > 0; i--) {
        obj["+" + i] = true;
    }
    for (let id in obj) {
        arr.push(+id);
    }
    return arr.join(",")

}

console.log(funcobj());






console.log('***********************************');








//sum 10 number 
function sum(num) {
    let sum = 0;
    let m;
    for (let j = 1; j <= num; j++) {
        sum = sum + j;
    }
    return sum;
}
console.log(sum(1)); //1+0=1
console.log(sum(3)); //1+2+3=6
console.log(sum(5)); //1+2+3+4+5=15
console.log(sum(10));

console.log('-------------');

function even(num) {
    let dd = [];
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) { continue; }
        dd.push(i);


    }
    return (dd.join("\n"));
}
console.log(even(10));

console.log('****************adad aval');
let n = 130;

nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...

        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        console.log(i); // a prime
    }

console.log('*******************mine');
for (let i = 2; i <= 20; i++) {
    for (let j = 2; j <= i; j++) {
        if (i == 2 && j == 2) {
            console.log(i)
            break
        };
        if (i % 2 !== 0) {
            if (i % j === 0) {
                console.log(i);
            }
        }
    }
}

console.log('*********function');
let avalarr = [];

function aval(num) {
    avalarr = [];
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i == 2 && j == 2) {
                avalarr.push(i);
                break;
            };

            if (i % 2 !== 0) {
                if (i == 3 && j == 3) {
                    avalarr.push(i);
                    break;
                }
                if (i % 3 !== 0) {
                    if (i == 5 && j == 5) {
                        avalarr.push(i);
                    }
                    if (i % 5 !== 0) {
                        if (i == 7 && j == 7) {
                            avalarr.push(i)
                        }
                        if (i % 7 !== 0) {
                            if (i % j === 0) {
                                avalarr.push(i);
                            }
                        }

                    }

                }

            } else {
                break;
            }
        }

    }
    return avalarr;
}
console.log(aval(10));
console.log(aval(20));

console.log('*************rewrite me and undrestand');

let vf = [];

function aaa(num) {
    next: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) { //اعداد ماقبل بررسی میکنه اگه بخش پذیر باشه میره عدد بعدی ولی اگه بخش پذیری نبود یعنی عدد اول و خط بعدی چاپ میکنه.
            if (i % j == 0) { continue next; }

        }
        vf.push(i);
    }
    return vf;
}
console.log(aaa(10));

console.log('********************switch case');
//like if
//without break othe case log without check conditional
let fb = 2;
switch (fb) {
    case 0:
        console.log("it's sataurday");
        break;
    case 1:
        console.log("it's sunday");
        break;
    case 2:
        console.log("it's monday");
        break;
    case 3:
        console.log("it's tuesday");
        break;
    case 4:
        console.log("it's wednesday");
        break;
    case 5:
        console.log("it's thursday");
        break;
    case 6:
        console.log("it's friday");
        break;
    default:
        console.log('not know');
        break;
}

let cd = 4;

switch (cd) {
    case 0:
        console.log("it's sataurday");
        break;
    case 1:
        console.log("it's sunday");
        break;
    case 2:
        console.log("it's monday");
        break;
    case 3:
        console.log("it's tuesday");
        break;
    case 4:
    case 5:
    case 6:
        console.log("it's weekend");
        break;
    default:
        console.log('not know');
        break;
}

console.log('------------------');

function browser(name) {
    if (name === "Edge") {
        return "You'v got the Edge!";
    } else if (name === "Firefox" || name === "Chrom" || name === "Safari" || name === "Opera") {
        return " Ok we supporte these Browser too !";
    } else {
        return "we hope that this page looks good !"
    }
}
console.log(browser("Firefox"));
console.log(browser("Edge"));
console.log(browser("Opera"));
console.log(browser("Op"));

console.log("---------------");

let dds = 1;

function ford(num) {
    switch (num) {
        case 0:
            return 0;
            //break;
        case 1:
            return 1;
        case 2:
        case 3:
            return '2,3';
    }
}
console.log(ford(dds));
console.log(ford(0));
console.log(ford(3));

console.log('************prime');
let ipr;
let listPrime = [];

function primee(num) {
    listPrime = [];
    for (ipr = 2; ipr <= num; ipr++) {
        if (!isPrime(ipr)) { continue; }
        listPrime.push(ipr);

    }
    return listPrime;
}

function isPrime(ip) {
    for (let j = 2; j < ip; j++) {
        if (ip % j == 0) { return false }

    }
    return true;
}
console.log(primee(10));
console.log(primee(20));

console.log("******");

function checkAge(age) {
    return age >= 18 ? true : confirm('Did parant allow you?');
}
console.log(checkAge(5));

console.log('**********min');

function minimum(a, b) {
    if (a == b) { return a }
    if (a > b) {
        return b
    } else {
        return a;
    }
}
console.log(minimum(1, 1));
console.log(minimum(1, 0));
console.log(minimum(5, 1));
console.log(minimum(8, 5));
console.log(minimum(8, 15));

console.log('--------------');

function tava(a, T) {
    if (T === 0) {
        return 1;
    }
    return a * tava(a, T - 1);
}
console.log(tava(2, 3));

console.log('--------------');

function Tava2(a, T) {
    let re = 1;
    for (let i = 0; i < T; i++) {
        re = re * a;
    }
    return re;
}
console.log(Tava2(2, 3));
console.log('--------------');
let vfg = Math.pow(2, 3);
console.log(vfg);

console.log('**********');

/*expression
let func =  function(){ rerturn 'hello'}
*/
let func;

function exper(age) {
    func = (age < 18) ? function() { return 'hello' } : function() { return 'greeting' };
    //console.log(func()); show result and undifined because like empty or return without variable
    return func();

}

console.log(exper(15));

console.log('---------------');
//copy declare function hello() to variable let copy= hello 
function declare(age) {
    let res = (age < 18) ? function hello() { return "hello" } : function by() { return "greeting" };
    return res();
}
console.log(declare(18)); //let res = function by(){return "greeting"}---> function res(){return "greeting"} --> greeting
console.log(declare(12));

console.log('**********************');

function LongestWord(sen) {

    // code goes here  
    var arr = sen.match(/[a-z0-9]+/gi);
    console.log(arr);
    var sorted = arr.sort(function(a, b) {
        return b.length - a.length;
    });
    console.log(sorted);
    return sorted[0];

}
console.log(LongestWord("fun&!! tim1e"));
// keep this function call here

console.log('*********************');

function ask(question, yes, no) {
    if (confirm(question)) {
        return yes();
    } else {
        return no()
    }
}
console.log(ask("do you mohsen?",
    () => { return "hello mohsen" },
    () => { return "i don't know you" }
));

console.log('************');
//res = ()=> {return "ypu are less than 18"}
function arro(age) {
    let res = (age < 18) ? () => { return "you are less than 18" } : () => { return "tou are up than 18" };
    return res();
}

console.log(arro(15));
console.log(arro(19));

console.log('***************object');

let user1 = {}; //create empty object;
user1["name"] = "mohsen";
user1["surname"] = "Hero";
//user1[lastName] = "mohsen";//error without " ";
user1["lastName"] = "Sarvari";

console.log(user1);

console.log(user1["lastName"]);
//console.log(user1[lastName]);error without " "

user1["surname"] = "Pete";
console.log(user1);
console.log(user1["surname"]);

delete user1["surname"];
console.log(user1);
console.log(user1["surname"]);

console.log('-------check empty object');

function check(obj) {
    if (isEmpty(obj)) {
        return true;
    } else {
        return false
    }

}

function isEmpty(ob) {
    for (let key in ob) {
        return false;
    }

    return true;
}
let obb = {
    name: "mohsen",
};
console.log(check(obb));

console.log('-----------------');

// let salary = {};
// salary["john"] = 100;
// salary["Eli"] = 130;
// salary['jack'] = 160;

// function sumSalary(sumOb) {
//     let sum = 0;
//     if ((!(isEmpty(sumOb)))) {
//         for (let name in sumOb) {
//             sum = sumOb[name] + sum;
//         }
//         return sum;
//     } else {
//         return "is Empty";
//     }
// }


// console.log(sumSalary(salary));
console.log("----------another way");
let summ = 0;
let salary = {};
salary["john"] = 100;
salary["Eli"] = 130;
salary['jack'] = 160;

function sumSalary(sumOb) {

    if ((!(isEmpty(sumOb)))) {
        return SumPart(sumOb);
        // for (let name in sumOb) {
        //     sum = sumOb[name] + sum;
        // }
        //return summ;
    } else {
        return "is Empty";
    }
}

function SumPart(obj) {
    for (let name in obj) {
        summ = obj[name] + summ;
    }
    return summ;

}


console.log(sumSalary(salary));

console.log('**************');

let orig = {}
orig["hieght"] = 300;
orig["width"] = 200;
orig["name"] = "hello";

for (let id in orig) {
    let insert = orig[id];
    console.log(typeof insert);
    if (typeof(insert) === typeof(12)) {
        orig[id] = insert * 2;
    } else {
        orig[id] = orig[id];
    }
}
console.log(orig);

console.log('**************');

let objj = {};
objj["name"] = "Mohsen";
objj["Lname"] = "sarvari";
objj["age"] = 20;
let objj2 = {};

for (let id in objj) {
    objj2[objj[id]] = id;
}
console.log(objj);
console.log(objj2);

console.log('*******************');
//copy function is pass by refrence
function real() {
    console.log('real22');
}
let coo = real;
real();
coo();

console.log("***************");
let asd = [];

function between(a, b) {
    for (let i = a + 1; i < b; i++) {
        asd.push(i);
    }
    return asd;
}
console.log(between(1, 6));

console.log('*************');

function eachN(num) {
    let Str = String(num);
    let res = [];
    for (let e in Str) {
        let resault = Str[e] * Str[e];
        res.push(resault);
    }
    return res.join("");
}
console.log(eachN(253));
console.log('*********************');

let sumresult = 0;

function listArray(array) {
    for (let item of array) {
        sumresult = sumresult + item;
    }
    return sumresult;
}
let arrrr = [2, 5, 4, 8, 6]
console.log(listArray(arrrr));
console.log('-----------');
let arrprompt = [];
let resPromp = 0;

function sumPrompt() {
    arrprompt = [];
    let askk;
    while (!(askk === "" || askk === null)) {
        askk = prompt("Number?");
        arrprompt.push(+askk);

    }
    for (let item of arrprompt) {
        resPromp = resPromp + item;

    }
    return resPromp;
}
console.log(sumPrompt());
console.log('*****************');
let clip = "l love programming my name is mohsen sarvari from mashhad 20 years old";
let clip2 = "l love program";
let maxL = 18;
let arrowClip = (str, maxLength) => {
    let length = str.length;
    if (length > maxLength) {
        let slice = str.slice(0, maxL);
        return slice + "...";
    } else {
        return str;
    }

}
console.log(arrowClip(clip, maxL));
console.log(arrowClip(clip2, maxL));

console.log('*************************');

// let inputt = "as as l hjuk as vgfh bjhj as bggh as vvjjm as nnkkmm";
// let inputt2 = "as";

// function findPlace(input, word) {
//     let lengthWord = word.length;
//     let lengthInput = input.length;
//     let offset = 0;
//     let count = 0;
//     let i = 0;
//     console.log(lengthInput);
//     console.log(lengthWord);
//     while (i < lengthInput) {
//         let place = input.indexOf(word, offset);
//         if (place < 0) { break; }
//         offset = place + lengthWord;
//         count++
//         i++;



//     }
//     return count;
// }
// console.log(findPlace(inputt, inputt2));
console.log('----------or');
// let inputt = "as as l hjuk as vgfh bjhj as bggh as vvjjm as nnkkmm as";
// let inputt2 = "as";

// function findPlace(input, word) {
//     let lengthWord = word.length;
//     let lengthInput = input.length;
//     let offset = 0;
//     let count = 0;
//     let i = 0;
//     console.log(lengthInput);
//     console.log(lengthWord);
//     while (offset < lengthInput) {
//         let place = input.indexOf(word, offset);
//         if (place < 0) { break; }
//         offset = place + lengthWord;
//         count++




//     }

//     return count;
// }
// console.log(findPlace(inputt, inputt2));
let inputt = "as as l hjuk as vgfh bjhj as bggh as vvjjm as nnkkmm as";
let inputt2 = "as";

function findPlace(input, word) {
    let lengthWord = word.length;
    let lengthInput = input.length;
    let offset = 0;
    let count = 0;
    let i = 0;
    console.log(lengthInput);
    console.log(lengthWord);
    while (true) {
        let place = input.indexOf(word, offset);
        if (place < 0) { break; }
        offset = place + lengthWord;
        count++




    }

    return count;
}
console.log(findPlace(inputt, inputt2));

console.log('*******************');

let names = "mohsen ali mobin hossein";
let splitt = names.split(); //convert to array
console.log(splitt.length);
splitt.push("hassan");
console.log(splitt);
let splitt2 = names.split(" "); //convert to array
console.log(splitt2);

let joinn = splitt2.join(); //convert to string
console.log(joinn);
let join2 = splitt2.join(""); //convert to string
console.log(join2);
let join3 = splitt2.join(" "); //convert to string
console.log(join3);

console.log('***********************');

let camel = "background-color";
let ss = camel.split("-");
console.log(ss);
let camel1 = "-back-molfg";
let spliteee = camel1.split("-");
console.log(spliteee);
let sdf = spliteee.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
console.log(sdf);
let joinMap = sdf.join("");
console.log(joinMap);

console.log('-----------------');

function firstIndex(str) {
    let splite = str.split("-");
    let mapResault = splite.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
    console.log(mapResault);
    let join = mapResault.join("");
    return join;
}
let sentence = "-web-kite";
console.log(firstIndex(sentence));
console.log(firstIndex("background-color"));
console.log(firstIndex("list-style-image"));

console.log('****************************');

let arrfilter = [2, 5, 8, 10];
let an = 1;
let bn = 5;
let resfilter = arrfilter.filter((item, an, bn) => item > an && item < bn);
console.log(resfilter);

console.log('---------------');

function filterRange(arr, a, b) {
    let filt = arr.filter((item) => item >= a && item < b)
    return filt;
}
let arrayy = [1, 3, 5, 8, 10, 4]
console.log(filterRange(arrayy, 1, 5));

console.log('---------------');

function filterRange2(arr, a, b) {
    let filt = arr.map((item) => item >= a && item < b)
    return filt;
}
let arrayyy = [1, 3, 5, 8, 10, 4]
console.log(filterRange2(arrayyy, 1, 5));

console.log('**************or');

function filterInrange2(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val1 = arr[i];
        if (val1 < a || val1 > b) {
            arr.splice(i, 1);
            i--; //?

        }
    }
    return arr;
}
let arrSplice = [5, 1, 8, 3, 8, 4, 7, 10, 2]
console.log(filterInrange2(arrSplice, 1, 4));
console.log('*-*****************');

function decrease(arr) {
    let res = arr.sort((a, b) => b - a)
    return res
}
console.log(decrease([5, -10, 8, 10, 16, 7, -4]));
console.log('*************');

function copySort(arr) {
    arr.sort()
    return arr
}
console.log(copySort(["HTML", "JavaScript", "CSS"]));

console.log('*******************');

function uniqe(str) {
    let regex = /^[a-z0-9]+$/i;
    let strArr = [];
    let resArray = [];
    if (regex.test(str)) {
        strArr = str.split("");
        for (let i of strArr) {
            if (!(resArray.includes(i))) {
                resArray.push(i);
            }
        }

    } else {
        return "invalid input--->number or alpha"
    }
    const resault = resArray.join('');
    return resault;
}
console.log(uniqe("ewee1255ghyh*"));
console.log(uniqe("ewee1255ghyh"));