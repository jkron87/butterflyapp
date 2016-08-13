'use strict';

angular.module('butterflyappApp')
.factory("GeolocationServiceV2", ['$q', '$window', function ($q, $window) {
  var service = {};
   service.getGeolocation = function () {
    var position = $window.navigator.geolocation.getCurrentPosition();
    var deferred = $q.defer();
    deferred.resolve(position);
    return deferred.promise;
  };

  return service;
 }]);
