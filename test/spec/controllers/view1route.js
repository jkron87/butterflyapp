'use strict';

xdescribe('Controller: View1routeCtrl', function () {

  // load the controller's module
  beforeEach(module('butterflyappApp'));

  var View1routeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    View1routeCtrl = $controller('View1routeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(View1routeCtrl.awesomeThings.length).toBe(3);
  });
});
