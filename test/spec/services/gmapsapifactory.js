'use strict';

xdescribe('Service: gmapsapifactory', function () {

  // load the service's module
  beforeEach(module('butterflyappApp'));

  // instantiate service
  var gmapsapifactory;
  beforeEach(inject(function (_gmapsapifactory_) {
    gmapsapifactory = _gmapsapifactory_;
  }));

  it('should do something', function () {
    expect(!!gmapsapifactory).toBe(true);
  });

});
