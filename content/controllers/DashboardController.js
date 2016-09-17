function DashboardController($scope){
    $scope.name = 'dashboard'
}

angular
 .module('app')
 .controller('DashboardController',DashboardController);