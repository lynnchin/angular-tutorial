function UserController($http){
    var API = "//jsonplaceholder.typicode.com/users/"
    var ctrl = this;
    this.userId = '';
    this.chosenUser = {};
    this.getUser = function(){
        if(!this.userId){
            return;
        }
        
        $http.get(API + this.userId)
        .then(function(response){
            // success
            ctrl.chosenUser = response.data;
        }, function(reason){
            // error
            ctrl.chosenUser = response.data;
        })
    };
    
}

angular
 .module('app')
 .controller('UserController',UserController);