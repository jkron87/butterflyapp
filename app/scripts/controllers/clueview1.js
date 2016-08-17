
     'use strict';
/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview1Ctrl
 * @description
 * # Clueview1Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('Clueview1Ctrl', function ($scope, $route) {
    $scope.reloadRoute = function() {
      $route.reload();
    }
  
  });
