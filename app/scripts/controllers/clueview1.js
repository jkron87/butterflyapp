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
  	var oButton1 = document.getElementById("hint1");
    var oText1 = document.getElementById("points1");
    var count1 = 100;


    oButton1.addEventListener('click', function() {


      	if (count1>50) {
          	oText1.innerHTML = count1 -= 10;
      		  } else {
      			oText1.innerHTML = count1 = 50;
      		  }  

      		  return count1;
    	});


    


   



  });

