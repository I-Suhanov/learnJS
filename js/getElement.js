"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

const heartAlternative = wrapper.querySelectorAll('.heart');
console.log(heartAlternative);
// box.style.backgroundColor = 'green';
// box.style.width = '500px';
box.style.cssText = 'background-color: green; width: 500px';

btns[2].style.borderRadius = '50%';

circles[1].style.backgroundColor = 'gray';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Something text');
div.classList.add('black');
//caniuse.com
//document.body.append(div);

wrapper.append(div);

div.innerHTML = '<h1>Hello world!</h1>';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

// div.textContent = 'hello';
// wrapper.appendChild(div);

//wrapper.prepend(div);

// hearts[0].before(div);
//hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[1], hearts[0]);

// console.log(box);
// console.log(btns[2]);
// // console.log(btns);
// console.log(circles);
// //css селекторы №28
// hearts.forEach((item) =>{
//     console.log(item);
// });
// console.log(oneHeart);