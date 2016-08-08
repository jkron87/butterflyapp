'use strict';

describe('Service: yelpgmapsfactory', function () {

  // load the service's module
  beforeEach(module('butterflyappApp'));

  // instantiate service
  var yelpgmapsfactory;
  beforeEach(inject(function (_yelpgmapsfactory_) {
    yelpgmapsfactory = _yelpgmapsfactory_;
  }));

  it('should do something', function () {
    expect(!!yelpgmapsfactory).toBe(true);
  });

});
