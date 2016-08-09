'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:GmapsapiCtrl
 * @description
 * # GmapsapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('geolocCtrl', function($scope){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          $scope.$apply(function(){
            $scope.position = position;
            console.log($scope.position);
          });
        });
      }
    })
