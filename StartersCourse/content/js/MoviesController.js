function MoviesController(){
    this.favorites = [{
       title: 'This is how it works',
        year: '1999',
        popular : true,
        category: 'thriller'
    }, {
        title: 'This is B',
        year: '2034',
        popular: false,
        category: 'fantasy'
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