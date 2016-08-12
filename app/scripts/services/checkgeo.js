'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.CheckGeo
 * @description
 * # CheckGeo
 * Service in the butterflyappApp.
 */
angular.module('butterflyappApp')
  .factory('CheckGeo', function () {

    var locationStuff = {};
    function checkerYelp(latChecker, longChecker) {
      locationStuff.newLatChecker = latChecker;
      locationStuff.newLongChecker = longChecker;
    }

    function checkerGmap(latToCheck, longToCheck) {
      locationStuff.newLatToCheck = latToCheck;
      locationStuff.newLongToCheck = longToCheck;
    }

    function test(){
      return locationStuff;
    }



    return { checkerYelp : checkerYelp,
            checkerGmap : checkerGmap,
            test: test
     }

  });
