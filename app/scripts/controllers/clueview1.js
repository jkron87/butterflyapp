'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview1Ctrl
 * @description
 * # Clueview1Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('Clueview1Ctrl', function ($scope) {
  	var oButton = document.getElementById("hint");
    var oText = document.getElementById("points");
    var count = 100;
    oButton.addEventListener('click', function() {
        oText.innerHTML = count -= 10;
    }, false);

  });
