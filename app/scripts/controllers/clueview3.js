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
    var count = 100;
    oButton.addEventListener('click', function() {


    	if (count>50) {
        	oText.innerHTML = count -= 10;
    		} else {
    		oText.innerHTML = count = 50;
    		}
    }, false);


 });
