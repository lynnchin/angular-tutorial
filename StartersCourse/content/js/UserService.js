function UserService($http){
    var API = "//jsonplaceholder.typicode.com/users/"
    this.getUser = function(userId){
          $http.get(API + userId)
        .then(function(response){
            // success
            return response.data;
        }, function(reason){
            // error
            return response.data;
        })
    };
}


angular
 .module ('app')
 .service ('UserService',UserService);