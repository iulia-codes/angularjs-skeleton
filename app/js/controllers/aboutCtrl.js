/*global angular */
(function () {
  'use strict';

  angular.module('baseapp.controllers')
    .controller('aboutCtrl', ['$scope',
      function ($scope) {
  			$scope.greet = "I am the about message!";
		}]);
  
}());
