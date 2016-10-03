function HomeController(){
    this.viewName = 'Home view'
}

angular
    .module('app')
    .controller('HomeController', HomeController);