'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:GmapsapiCtrl
 * @description
 * # GmapsapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('geolocCtrl', ['$scope', 'GeolocationService', function ($scope, geolocation) {
    $scope.position = null;
    $scope.message = "Determining gelocation...";

    geolocation().then(function (position) {
        $scope.position = position;
        console.log($scope.position);
    }, function (reason) {
        $scope.message = "Could not be determined."
    });
}]);
