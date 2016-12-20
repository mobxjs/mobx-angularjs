const angular = require('angular');
const mobx = require('mobx');

export function autorun(scope, ...args) {
  const dispose = mobx.autorun(...args);
  if (scope) scope.$on('$destroy', dispose);
}

export function autorunAsync(scope, ...args) {
  const dispose = mobx.autorunAsync(...args);
  if (scope) scope.$on('$destroy', dispose);
}

export function reaction(scope, ...args) {
  const dispose = mobx.reaction(...args);
  if (scope) scope.$on('$destroy', dispose);
}

const mobxAutorun = ['$timeout', function mobxAutorun($timeout) {
  return {
    restrict: 'A',
    scope: false,
    link: function($scope) {
      const dispose = mobx.reaction(
        () => $scope.$$watchers.map((watcher) => watcher.get($scope)),
        () => $timeout($scope.$digest.bind($scope))
      );
      $scope.$on('$destroy', dispose);
    }
  };
}];

const ngMobxModule = angular.module('ng-mobx', []);
ngMobxModule.directive('mobxAutorun', mobxAutorun);
