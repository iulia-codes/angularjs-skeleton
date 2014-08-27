/*global angular */
(function () {
  'use strict';

  angular.module('baseapp.controllers')
    .controller('homepageCtrl', ['$scope',
      function ($scope) {
  			$scope.greet = "I am homepage";
		}]);
  
}());
