'use strict';

describe('Service: yelpapifactory', function () {

  // load the service's module
  beforeEach(module('butterflyappApp'));

  // instantiate service
  var yelpapifactory;
  beforeEach(inject(function (_yelpapifactory_) {
    yelpapifactory = _yelpapifactory_;
  }));

  it('should do something', function () {
    expect(!!yelpapifactory).toBe(true);
  });

});
