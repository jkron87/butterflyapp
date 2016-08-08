'use strict';

describe('Controller: Clueview3Ctrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var Clueview3Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Clueview3Ctrl = $controller('Clueview3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Clueview3Ctrl.awesomeThings.length).toBe(3);
  });
});
