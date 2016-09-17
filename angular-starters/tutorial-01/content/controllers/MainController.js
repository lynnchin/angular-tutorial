function MainController($scope){
  $scope.name = 'Main'    
}

angular
 .module('app')
 .controller("MainController", MainController);