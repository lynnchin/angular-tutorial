function AboutController(){
    this.viewName = 'About View';
}

angular
    .module('app')
    .controller('AboutController',AboutController);