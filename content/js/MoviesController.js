function MoviesController(){
    this.favorites = [{
       title: 'This is how it works',
        year: '2003',
        popular : true
    }, {
        title: 'This is B',
        year: '2034',
        popular: false
    },{
        title: 'The matrix',
        year: '2032',
        popular: true
    },{
        title: 'Save A',
        year: '3023',
        popular: false
    }];
}

angular
 .module('app')
 .controller('MoviesController',MoviesController);