describe('mobxAutorun Directive', () => {
  let element, $scope, createDirective;

  beforeEach(angular.mock.module('NgMobx.directives'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createDirective = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<mobx-autorun></mobx-autorun>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createDirective({});
    expect(true).toBeTruthy();
  });
});
