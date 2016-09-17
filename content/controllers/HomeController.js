function HomeController($scope){
  $scope.name = 'Home'    
}

angular
 .module('app')
 .controller("HomeController", HomeController);