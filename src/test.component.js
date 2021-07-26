const myApp = angular.module("app", []);

myApp.controller("HelloWorldCtrl", function ($scope, $timeout) {
  const name = `Luis`;
  $scope.message = `Hello World ${name}`;

  $timeout(() => {
    console.log("name");
  }, 3000);
});
