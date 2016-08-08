'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.yelpapifactory
 * @description
 * # yelpapifactory
 * Factory in the butterflyappApp.
 */
angular.module('butterflyappApp')
  .factory('yelpapifactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
