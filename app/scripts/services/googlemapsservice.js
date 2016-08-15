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
      console.log(newLat);
      console.log(newLong);
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:newLat , lng: newLong},
        zoom: 14,
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
        center: {lat:newLat, lng:newLong},
        radius: 400
      });

      var createMarker = function (){
      var myLatLng = {lat: 42.3297, lng: -83.0462};
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
      })

    }
    createMarker();
  }


    return {initMap : initMap,
          };

  });
