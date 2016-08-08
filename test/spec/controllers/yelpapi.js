'use strict';

describe('Controller: YelpapiCtrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var YelpapiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YelpapiCtrl = $controller('YelpapiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(YelpapiCtrl.awesomeThings.length).toBe(3);
  });
});
