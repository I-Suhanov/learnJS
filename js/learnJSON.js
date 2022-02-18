'use strict';

const persone = {
    name: 'Alex',
    tel: '+78954564504',
    parents: {
        mom: 'Jes',
        dad: 'Pit'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(clone);
console.log(persone);
console.log(JSON.stringify(persone));