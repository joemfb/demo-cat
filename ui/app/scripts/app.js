
angular.module('demoCat', ['ngRoute', 'ngCkeditor'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    'use strict';

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/create', {
        templateUrl: '/views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/detail', {
        templateUrl: '/views/demo.html',
        controller: 'DemoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .filter('unsafe', function($sce) {
    return function(val) {
      if (typeof val === 'string' || val instanceof String) {
        return $sce.trustAsHtml(val);
      }
    }
  });
