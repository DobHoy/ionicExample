var App = angular.module("App", ["ionic"]);

App.controller("AppCtrl", ["$scope", "$log", AppCtrl]);

function AppCtrl($scope, $log) {
  $scope.refresh = function() {
    $log.info("I press button")
    }
}