'use strict';

describe('Controller: FpmapCtrl', function () {

  // load the controller's module
  beforeEach(module('angular1App'));

  var FpmapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FpmapCtrl = $controller('FpmapCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FpmapCtrl.awesomeThings.length).toBe(3);
  });
});
