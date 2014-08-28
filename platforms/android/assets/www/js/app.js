var App = angular.module("App", ["ionic"]);

App.service("freshpressed", ["$http", "$log", freshpressed]);

App.controller("AppCtrl", ["$scope", "$log", "freshpressed", AppCtrl]);

function AppCtrl($scope, $log, freshpressed) {
  $scope.data = [];
  $scope.refresh = function() {
      console.log("hi the refresh got pulled");
      $log.info("Refresh Button pressed");
      freshpressed.getBlogs($scope);
    }
}

function freshpressed($http, $log)
{
    this.getBlogs = function($scope){
        $http.jsonp("https://api.instagram.com/v1/media/popular?client_id=0f37df9a9cea4e80894d927da6905f02&callback=JSON_CALLBACK")
            .success(function(result) {
                $scope.data = result.data[0].likes.count;  
                console.log("likes is " + result.data[0].likes.count);
                $scope.$broadcast("scroll.refreshComplete");
            });
    };

}
