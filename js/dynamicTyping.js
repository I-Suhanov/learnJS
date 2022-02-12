"use strict";

//To string

console.log(typeof(String(null)));
console.log(String(null));

console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//to number

console.log(typeof(Number('4')));
console.log(Number('4'));

console.log(typeof(+'4'));

console.log(typeof(parseInt('15px', 10)));

//let answ = +prompt("Hello", '');

// To boolean
const falseAll = [0, '', null, undefined, NaN];

let switcher = null;

if(switcher){
    console.log('Working...');
} else{
    console.log('not working...');
}

console.log(typeof(Boolean('4')));

console.log(typeof(!!"asfas"));