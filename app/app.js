/*global angular*/
(function () {
  'use strict';
  angular.module('baseapp.controllers', []);
  // Declare app level module which depends on filters, and services
  angular.module('baseapp', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'baseapp.controllers'
  ]).
    config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
      
      $routeProvider.when('/', {templateUrl: 'views/homepage.html', controller: 'homepageCtrl'});
      $routeProvider.when('/about', {templateUrl: 'views/about.html', controller: 'aboutCtrl'});      
      $routeProvider.otherwise({redirectTo: '/'});
    }]);
}());
