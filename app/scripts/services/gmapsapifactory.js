'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.gmapsapifactory
 * @description
 * # gmapsapifactory
 * Factory in the butterflyappApp.
 */
angular.module('butterflyappApp')
  .factory('gmapsapifactory', function () {
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
