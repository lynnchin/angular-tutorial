function SettingsController($scope){
  $scope.name = 'Reports'    
}

angular
 .module('app')
 .controller("SettingsController", SettingsController);