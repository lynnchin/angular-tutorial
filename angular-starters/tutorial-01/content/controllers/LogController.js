function LogController($scope){
  $scope.name = 'Log'    
}

angular
 .module('app')
 .controller("LogController", LogController);