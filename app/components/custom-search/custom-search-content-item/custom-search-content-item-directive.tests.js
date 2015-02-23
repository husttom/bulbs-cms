'use strict';

describe('Directive: customSearchContentItem', function () {
  var
    $scope,
    $directiveScope;

  beforeEach(function () {
    module('bulbsCmsApp');
    module('bulbsCmsApp.mockApi');
    module('jsTemplates');

    inject(function(_$rootScope_, $compile) {
       $scope = _$rootScope_.$new();

      var element = $compile('<custom-search-content-item></custom-search-content-item>')($scope.$new());
      _$rootScope_.$digest();
      $directiveScope = element.isolateScope();
    });
  });

  it('should change display when service says it\'s included', function () {
// TODO : fill this in
    throw 'Not implemented yet.';
  });

  it('should change display when service says it\'s excluded', function () {
// TODO : fill this in
    throw 'Not implemented yet.';
  });

  it('should change display when service says it\'s pinned', function () {
// TODO : fill this in
    throw 'Not implemented yet.';
  });
});
