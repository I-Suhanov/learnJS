"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // ссылка на существующий объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 1,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 4,
    e: 25
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 20;

console.log(add, ": ", clone);

const oldArr = [5, 2, 3, 4];
const newArr = oldArr.slice();

newArr[1] = 125;
console.log(newArr, ": ----- : ", oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [1, 2, 3];

log(...num);

const array = ['a', 'b', 'c'];

const copyArr = [...array];

const q = {
    one: 1,
    b: 2
};

const newQ = {...q};

console.log(q, "-----", newQ);