function RouteController($routeProvider){
    $routeProvider
  .when("/", {
    templateUrl : "dashboard.html",
    controller: "DashboardController"
  })
  .when("/dashboard", {
    templateUrl : "dashboard.html",
    controller: "DashboardController"
  })    
  .when("/business-case", {
    templateUrl : "business-case.html",
    controller: "BusinessCaseController"
  })
  .when("/operations", {
    templateUrl : "operations.html",
    controller: "OperationsController"
  })
  .when("/disposals", {
    templateUrl : "disposals.html",
    controller: "DisposalsController"
  })
  .when("/reports", {
    templateUrl : "reports.html",
    controller: "ReportsController"
  })
  .when("/settings", {
    templateUrl : "settings.html",
    controller: "SettingsController"
  })
  .when("/log", {
    templateUrl : "log.html",
    controller: "LogController"
  }) 
  .when("/creation", {
    templateUrl : "creation.html",
    controller: "CreationController"
  });
}

angular
 .module('app')
 .config(RouteController);
