let obj = {
    "key": "value",
    "key1": "value",
    "key2": function () {

    },
}

let user2 = Object();


// let key = 2
let key = 'name'
// user2.key = 'part'

user2['name'] = 'part'

// console.log(user2['name']);

let obj2 = {
    key
}


// console.log(obj2);

// obj2.key = 'developer3'
// console.log(obj2);

// console.log(obj2);

obj2.function = function () {
    console.log("hello from obj2");
}

// obj2.function()

// console.log("key2" in obj2);



// for (let key in company) {
//     console.log(key , company[key]);
// }

const numbers = {
    '2': 2,
    '3': 3,
    name2: 'numbers2',
    name1: 'numbers1',
    '1': 1,
}

// console.log(numbers);


// delete numbers.name1

// console.log(numbers);


const company = {
    name: 'part',
    college: 'developer3',

    sayHello: function () {
        console.log("hello from part");
    },
    // sayHello() {

    // },

}


// company.name = 'part2'

// company = numbers


const company2 = company

company2.name = 'part2'

// console.log(company2);
// console.log(company);

// const company2 = {
//     name: 'part',
//     college: 'developer3',

//     sayHello: function () {
//         console.log("hello from part");
//     },
//     // sayHello() {

//     // },
// }

// console.log(company);
// console.log(company2);


// console.log({} === {});

let game1 = {
    name: 'fifa',
    type: {
        title: 'sport'
    }
}
let game2 = {};
// Object.assign(game2 , game1);

game2 = JSON.parse(JSON.stringify(game1))

// console.log(game1);
// console.log(game2);

game2.name = 'pes'
game2.type.title = 'new Sport'

// console.log(game1);
// console.log(game2);

JSON.stringify()

let game3 = {
    name: 'fifa',
    type: {
        title: 'sport'
    }
}

// console.log(game3.age?.['title']);


// console.log(Object.keys(game3));
// console.log(Object.values(game3));

// console.log(Object.entries(game3));


