'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:YelpapiCtrl
 * @description
 * # YelpapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
.controller('YelpapiCtrl', ['$scope', 'MyYelpAPI', function($scope, MyYelpAPI) {
      $scope.businesses = [];
      MyYelpAPI.retrieveYelp('', function(data) {
          $scope.businesses = data.businesses;
          console.log(data);
      });
  }]);
