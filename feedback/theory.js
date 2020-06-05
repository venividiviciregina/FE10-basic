let x = 1;
let y = '1';

if (x == y) {
    console.log('x == y');
}

if (x === y) {
    console.log('x === y');
} else {
    console.log('x !== y');
}

function sum(a, b) {
    return a + b;
}

function doSomething(a, b, func) {
    return func(a, b); 
}

function doSomethingSecond(a, b, func1, func2) { // a = 5; b = 10; func1 = function (a, b) {return a + b}; func2 = function(a, b) {return a / b;}
    if (a > b) {
        return func1(a, b);
    } else {
        return func2(a, b);
    }
}

console.log(doSomethingSecond(10, 5, sum, minus));

//Arrow function in JavaScript

let a = function(x) {
    b = x * 2;
    return b / 2;
};

let a = (x) => {
    b = x * 2;
    return b / 2;
};

let a = x => x * 2;

let multiply = function(a, b) {
    return a * b;
}

console.log(multiply);
console.log(doSomethingSecond(5, 10, sum, multiply));

multiply = function(a, b) {
    return a * b * b;
}

console.log(multiply);
console.log(doSomethingSecond(5, 10, sum, multiply));

function minus(a, b) {
    return a - b;
}

console.log(
    doSomethingSecond(5, 10, sum, function(a, b) { return a / b; })
);

// Arrays
let a = []; // empty array

let b = [1, 2, -5, 0];

console.log(b[0]); 

console.log(b.length);

b.push(10);

console.log(b[b.length - 1]);

b[1] = 3;

console.log(b[1]);

for (let i = 0; i < b.length; i++) {
    console.log('b[' + i + '] = ' + b[i]);
};

b.forEach(value => console.log(value));

console.log(typeof b); //object

// Objects

let object = {}; //empty object

console.log(typeof object);

let anotherObject = {
    name: 'Vasya',
    age: 25,
    skills: [
        'play football', 'eat', 'sleep'
    ],
    address: {
        street: 'Lenina 1',
        city: 'Leninsk',
        zipCode: 111000
    },
    smoking: false
};

console.log(anotherObject.name);
console.log(anotherObject.smoking);
console.log(anotherObject.skills);
console.log(anotherObject.address.street);


console.log(anotherObject['name']);
console.log(anotherObject['address']['zipCode']);

let field = 'name';
console.log(anotherObject[field]);

field = 'address';
console.log(anotherObject[field]);


