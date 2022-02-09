"use strict";

// if(4 == 8){
//     console.log('OK!');
// } else {console.log('Not OK!')};

const num = 51;

// if(num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Much');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error');

switch (num) {
    case 49: 
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 50:
        console.log('OK!');
        break;
    default:
        console.log('Default');
        break;
}