const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovieName = prompt('Один из последних просмотренных фильмов?', '');
let reitingMove = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieName] = reitingMove;

lastMovieName = prompt('Один из последних просмотренных фильмов?', '');
reitingMove = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastMovieName] = reitingMove;

console.log(personalMovieDB);