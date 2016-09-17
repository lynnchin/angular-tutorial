function OperationsController($scope){
  $scope.name = 'Operations'    
}

angular
 .module('app')
 .controller("OperationsController", OperationsController);