describe('mobxAutorun Component', () => {
  let element, $scope, createComponent;

  beforeEach(angular.mock.module('NgMobx.components'));

  beforeEach(angular.mock.inject(($rootScope, $compile) => {
    createComponent = (scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element('<mobx-autorun></mobx-autorun>');
      element = $compile(element)($scope);
      $scope.$apply();
    };
  }));

  it('should be true', () => {
    createComponent({});
    expect(true).toBeTruthy();
  });
});
