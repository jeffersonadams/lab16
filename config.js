var app = angular.module('myModule');

app.config(function($routeProvider) {
  $routeProvider
  .when('/output', {
    controller: 'routeCtrl',
    templateUrl: 'output.html'
  })
  .when('/input', {
    controller: 'routeCtrl',
    templateUrl: 'input.html'
  })
  .otherwise({
    controller: 'routeCtrl',
    templateUrl: 'input.html'
  })
})
//done
