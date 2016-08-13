'use strict';

describe('Service: Geolocation Service', function () {

  beforeEach(module('butterflyappApp'));

  var GeolocationService;
  beforeEach(inject(function ($q, $window, _GeolocationServiceV2_) {
    GeolocationService = _GeolocationServiceV2_;

    var deferred = $q.defer();
    deferred.resolve({
      latitude: 43,
      longitude: -83
    });

    $window.navigator = {
      geolocation: {
        getCurrentPosition: function (){
          return deferred.promise;
        }
      }
    }
  }));

  describe('#getGeolocation', function(){
    it("it returns an object with latitude and longitude", function() {
      var promise = GeolocationService.getGeolocation();
      promise.then(function(coordinates) {
          expect(coordinates.latitude).toEqual(43);
          expect(coordinates.longitude).toEqual(-83);
        });
    })
  });
});
