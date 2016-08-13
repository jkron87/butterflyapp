'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.gmapsapifactory
 * @description
 * # gmapsapifactory
 * Factory in the butterflyappApp.
 */
angular.module('butterflyappApp')
.factory("GeolocationService", ['$q', '$window', '$rootScope', function ($q, $window, $rootScope) {
     return function () {
         var deferred = $q.defer();
         console.log('Im here!');
         if (!$window.navigator) {
             $rootScope.$apply(function() {
                 deferred.reject(new Error("Geolocation is not supported"));
             });
         } else {
             $window.navigator.geolocation.getCurrentPosition(function (position) {
                 $rootScope.$apply(function() {
                     deferred.resolve(position);
                 });
             }, function (error) {
                 $rootScope.$apply(function() {
                     deferred.reject(error);
                 });
             });
         }

         return deferred.promise;
     }
 }]);
