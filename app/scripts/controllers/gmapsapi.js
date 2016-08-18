'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:GmapsapiCtrl
 * @description
 * # GmapsapiCtrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('geolocCtrl', ['$scope', 'GeolocationService', 'CheckGeo', function ($scope, geolocation, CheckGeo) {
    $scope.position = null;
      $scope.message = "Determining gelocation...";

    geolocation().then(function (position) {
        $scope.position = position;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var latToCheck = latitude.toFixed(0);
        var longToCheck = longitude.toFixed(0);
        CheckGeo.checkerGmap(latToCheck, longToCheck);

    }, function (reason) {
        $scope.message = "Could not be determined."
    });
}]);
