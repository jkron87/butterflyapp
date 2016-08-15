'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview2Ctrl
 * @description
 * # Clueview2Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('Clueview2Ctrl', ['$scope', 'pointsService', function ($scope, pointsService) {
  	$scope.ptFunction2 = function() {
  		pointsService.pointsPoints();
  	}


  }]);

