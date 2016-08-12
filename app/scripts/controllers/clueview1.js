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
  	var oButton = document.getElementById("hint1");
    var oText = document.getElementById("points1");
    var count = 100;
    oButton.addEventListener('click', function() {


      	if (count>50) {
          	oText.innerHTML = count -= 10;
      		  } else {
      			oText.innerHTML = count = 50;
      		  }
    }, false);


  });
