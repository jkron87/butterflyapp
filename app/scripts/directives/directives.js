'use strict';

/**
 * @ngdoc directive
 * @name butterflyappApp.directive:directives
 * @description
 * # directives
 */
angular.module('butterflyappApp')
.directive("myMaps", function(){

});


.directive("pointsDirective", function pointsPoints() {
	var oButton = document.getElementById("hint");
    var oText = document.getElementById("points");
    var count = 100;


    oButton.addEventListener('click', function() {


      	if (count>50) {
          	oText.innerHTML = count -= 10;
      		  } else {
      			oText.innerHTML = count = 50;
      		  }  

    });


});