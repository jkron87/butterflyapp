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


    // Get the modal to create it
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    //Get the text of the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //update points based on number of hints given
    oButton.addEventListener('click', function() {
      document.getElementById("totalPoints").innerHTML = "Total Points: " + count;
    }, false);



 });
