'use strict';

/**
 * @ngdoc service
 * @name butterflyappApp.googlemapsservice
 * @description
 * # googlemapsservice
 * Service in the butterflyappApp.
 */
angular.module('butterflyappApp')
  .factory('googlemapsservice', function () {
    var map;

    function initMap(newLat, newLong) {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: newLat, lng: newLong},
          zoom: 14,
          disableDefaultUI: true,
          draggable: false,
          disableDoubleClickZoom: false,
          keyboardShortcuts: false,
          overviewMapControl: false,
          scrollwheel: false,

        });

        var cityCircle = new google.maps.Circle({
          strokeColor: '#98ddde',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#98ddde',
          fillOpacity: 0.35,
          map: map,
          center: {lat: newLat, lng: newLong},
          radius: 1000
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here!');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
    return {initMap : initMap}

  }

  );
