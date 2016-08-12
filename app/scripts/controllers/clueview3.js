'use strict';

/**
 * @ngdoc function
 * @name butterflyappApp.controller:Clueview3Ctrl
 * @description
 * # Clueview3Ctrl
 * Controller of the butterflyappApp
 */
angular.module('butterflyappApp')
  .controller('Clueview3Ctrl', function ($scope) {
  	var oButton = document.getElementById("hint3");
    var oText = document.getElementById("points3");
    var count3 = 100;
    oButton.addEventListener('click', function() {


    	if (count3>50) {
        	oText.innerHTML = count3 -= 10;
    		} else {
    		oText.innerHTML = count3 = 50;
    		}
    }, false);


 });
