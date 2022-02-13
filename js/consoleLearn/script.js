"use strict";

let number = 5; // let можно менять
const leftBorderWidth = 1; //const нельзя менять

number = 10;
console.log(number);

const obj = {
    a:50
};

obj.a = 10;

console.log(obj);


var name = "Ivan";

{
    //let res = 60; //нельзя так
    var resul = 50; // можно так
}

//console.log(res); //нельзя так
console.log(resul); //можно так 