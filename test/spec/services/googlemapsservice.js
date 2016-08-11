'use strict';

describe('Service: googlemapsservice', function () {

  // load the service's module
  beforeEach(module('butterflyappApp'));

  // instantiate service
  var googlemapsservice;
  beforeEach(inject(function (_googlemapsservice_) {
    googlemapsservice = _googlemapsservice_;
  }));

  it('should do something', function () {
    expect(!!googlemapsservice).toBe(true);
  });

});
