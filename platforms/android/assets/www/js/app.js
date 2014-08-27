var App = angular.module("App", ["ionic"]);

App.service("freshpressed", ["$http", "$log", freshpressed]);

App.controller("AppCtrl", ["$scope", "$log", "freshpressed", AppCtrl]);

function AppCtrl($scope, $log, freshpressed) {
  $scope.posts = [];
  $scope.refresh = function() {
      console.log("hi the refresh got pulled");
      $log.info("Refresh Button pressed");
      freshpressed.getBlogs($scope);
    }
}

function freshpressed($http, $log)
{
    this.getBlogs = function($scope){
      $http.jsonp("https://public-api.wordpress.com/rest/v1/freshly-pressed?callback=JSON_CALLBACK")
          .success(function(result) {
            
            $log.info(JSON.stringify(result.posts));
            // $log.alert("the number of posts are" + JSON.stringify(result.number));
            $scope.posts = result.posts;
            $scope.$broadcast("scroll.refreshComplete");
          });
    };

}