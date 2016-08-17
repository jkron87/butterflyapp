'use strict';

xdescribe('Controller: Clueview1Ctrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var Clueview1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Clueview1Ctrl = $controller('Clueview1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Clueview1Ctrl.awesomeThings.length).toBe(3);
  });
});
