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



    	if (count>50) {
        	oText.innerHTML = count -= 10;
    		} else {
    			oText.innerHTML = count = 50;
    		}



    }, false);

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 43, lng: -83},
        zoom: 13,
        disableDefaultUI: true,
        draggable: false,
        disableDoubleClickZoom: true,
        keyboardShortcuts: false,
        overviewMapControl: false,
        scrollwheel: false
      });
    var cityCircle = new google.maps.Circle({
        strokeColor: '#98ddde',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#98ddde',
        fillOpacity: 0.35,
        map: map,
        center: {lat: 43, lng: -83},
        radius: 1200
      });

    }
  initMap();

  });
