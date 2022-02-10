"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 26;
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num); 

function calc(a, b) {
    return (a + b);
}

console.log(calc(5, 7));
console.log(calc(7, 2));
console.log(calc(9, 1));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//function declaration используется только после объявления
const logger = function() {
    console.log("Hello");
};

logger();

const cal = (a, b) => { return a + b };