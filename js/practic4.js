"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function(){
        let tmpFilmName;
        let tmpFilmReiting;
        for(let i = 0; i < 2; i++){
            tmpFilmName = prompt('Один из последних просмотренных фильмов?', '');
            tmpFilmReiting = prompt('На сколько оцените его?', '');
            
            if(tmpFilmName != null && tmpFilmName.length != 0 && tmpFilmName.length <= 50){
                this.movies[tmpFilmName] = tmpFilmReiting;
                console.log("done");
            } else {
                i--;
                console.log('Error');
            }
        
        }
    },
    setCount: function(){
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    detectPersonalLevel: function() {
        if(this.count < 10){
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count < 30){
            console.log('Вы классический зритель');
        } else if(this.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Error');
        }
        
    },
    showMyDB: function() {
        if(!this.privat){
            console.log(this);
        }
    },
    writeYourGenres: function() {
        let tmp;
        for(let i = 0; i < 3; i++){
            tmp = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if(tmp != null && tmp != ''){
                this.genres[i] = tmp;
            } else{
                i--;
            }
        }
        this.genres.forEach(function(item, i, arr){
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }
};

personalMovieDB.setCount();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();