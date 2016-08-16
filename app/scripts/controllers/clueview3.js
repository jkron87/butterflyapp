'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview3Ctrl
 * @description
 * # Clueview3Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')



.controller('Clueview3Ctrl', function ($scope, $route) {
  $scope.reloadRoute = function() {
    $route.reload();
  }
