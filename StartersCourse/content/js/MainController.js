function MainController(){
    this.name = 'Lynn';
    this.myObject = {
    one: 'key 1',
    two: 'key 2'
};

}


angular
.module('app')
.controller('MainController', MainController);