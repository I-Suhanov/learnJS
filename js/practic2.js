"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let tmpFilmName;
let tmpFilmReiting;

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

if(personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30){
    console.log('Вы классический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}

console.log(personalMovieDB);