'use strict';

describe('Service: CheckGeo', function () {

  // load the service's module
  beforeEach(module('butterflyappApp'));

  // instantiate service
  var CheckGeo;
  beforeEach(inject(function (_CheckGeo_) {
    CheckGeo = _CheckGeo_;
  }));

  it('should do something', function () {
    expect(!!CheckGeo).toBe(true);
  });

});
