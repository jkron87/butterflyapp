'use strict';

describe('Controller: Clueview2Ctrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var Clueview2Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Clueview2Ctrl = $controller('Clueview2Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Clueview2Ctrl.awesomeThings.length).toBe(3);
  });
});
