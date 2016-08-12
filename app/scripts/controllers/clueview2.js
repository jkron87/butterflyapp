'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview2Ctrl
 * @description
 * # Clueview2Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('Clueview2Ctrl', function ($scope) {
  	var oButton = document.getElementById("hint2");
    var oText = document.getElementById("points2");
    var count = 100;
    oButton.addEventListener('click', function() {


      	if (count>50) {
          	oText.innerHTML = count -= 10;
      		  } else {
      			oText.innerHTML = count = 50;
      		  }
    }, false);


  });
