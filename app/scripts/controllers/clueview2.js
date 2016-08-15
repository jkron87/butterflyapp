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
  	var oButton2 = document.getElementById("hint2");
    var oText2 = document.getElementById("points2");
    var count2 = 100;

    oButton2.addEventListener('click', function() {


      	if (count2>50) {
          	oText2.innerHTML = count2 -= 10;
      		  } else {
      			oText2.innerHTML = count2 = 50;
      		  }  

      		  return count2;
    	});



  });

