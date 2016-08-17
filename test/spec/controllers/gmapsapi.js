'use strict';

xdescribe('Controller: GmapsapiCtrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var GmapsapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GmapsapiCtrl = $controller('GmapsapiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GmapsapiCtrl.awesomeThings.length).toBe(3);
  });
});
