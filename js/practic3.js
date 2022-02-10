"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let tmpFilmName;
let tmpFilmReiting;

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        tmpFilmName = prompt('Один из последних просмотренных фильмов?', '');
        tmpFilmReiting = prompt('На сколько оцените его?', '');
        
        if(tmpFilmName != null && tmpFilmName.length != 0 && tmpFilmName.length <= 50){
            personalMovieDB.movies[tmpFilmName] = tmpFilmReiting;
            console.log("done");
        } else {
            i--;
            console.log('Error');
        }
    
    }
}


function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if(personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Error');
    }
    
}

function showMyDB() {
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let tmp;
    for(let i = 0; i < 3; i++){
        tmp = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if(tmp != null && tmp != ''){
            personalMovieDB.genres[i] = tmp;
        } else{
            i--;
        }
    }
}