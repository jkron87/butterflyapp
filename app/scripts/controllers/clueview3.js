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
    var count = 100;
    var oText = document.getElementById("points");
    var oButton = document.getElementById('hint');
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
 });

// .controller('Clueview3Ctrl', ['$scope', 'pointsService', function ($scope, pointsService) {
//   	$scope.pointsPoints;
//
//   }]);

