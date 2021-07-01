const myApp = angular.module("app", []);

myApp.controller("HelloWorldCtrl", function($scope) {
  const name = `Luis`
  $scope.message = `Hello World ${name}` 
})