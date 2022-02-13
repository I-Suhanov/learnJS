"use strict";

function first() {
    //Do something

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`i learn ${lang}`);
    callback();
}

function done() {
    console.log("I learn this lesson");
}

learnJS("JavaScript", done);