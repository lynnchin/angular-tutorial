function MainController(){
    this.firstCount = 1;
    this.secondCount = 2;
    this.thirdCount = 3;
}

angular
    .module('app')
    .controller('MainController', MainController);