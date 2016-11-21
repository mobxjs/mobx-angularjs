const angular = require('angular');

describe('ifEnv Directive', () => {
  let testElement, buildElement;

  beforeEach(angular.mock.module('NgMobx.config', 'NgMobx.directives'));

  beforeEach(angular.mock.inject(($compile, $rootScope) => {
    const testTemplate  = '<div><div if-env="test">Contents</div></div>';
    const buildTemplate = '<div><div if-env="production">Contents</div></div>';

    testElement = angular.element(testTemplate);
    testElement = $compile(testElement)($rootScope);

    buildElement = angular.element(buildTemplate);
    buildElement = $compile(buildElement)($rootScope);
  }));

  it('should render element under correct environment', () => {
    expect(testElement.html()).toContain('Contents');
  });

  it('should not render element under wrong environment', () => {
    expect(buildElement.html()).not.toContain('Contents');
  });
});
