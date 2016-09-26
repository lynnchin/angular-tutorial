function MoviesController(){
    this.likesList = [];
    this.addToLikes = function(movie){
        this.likesList.push(movie);
    };
    
    this.unlike = function(index){
        this.likesList.splice(index, 1);
    }
    
    this.favorites = [{
       title: 'This is how it works',
        year: '1999',
        popular : true,
        category: 'thriller',
        img: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRo9vfJCM6dzPkZHIHBVCtlJnAnew9Ai26kEdrli0-tfmatmciD'
    }, {
        title: 'This is B',
        year: '2034',
        popular: false,
        category: 'fantasy',
        img: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm'
    },{
        title: 'The matrix',
        year: '2032',
        popular: true,
        category: 'romance'
    },{
        title: 'Save Amber',
        year: '3023',
        popular: false
    }];
}

angular
 .module('app')
 .controller('MoviesController',MoviesController);