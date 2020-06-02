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

