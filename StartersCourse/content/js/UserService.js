function UserService($http){
    var API = "//jsonplaceholder.typicode.com/users/"
    function getUser(userId){
         return $http.get(API + userId)
        .then(function(response){
            // success
            return response.data;
        }, function(reason){
            // error
            return response.data;
        })
    };
    function getAllUsers(){
        
    }
    
    return {
        getUser: getUser,
        getAllUsers: getAllUsers
    };
}


angular
 .module ('app')
 .factory ('UserService',UserService);