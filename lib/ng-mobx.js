import angular from 'angular';
import mobx from 'mobx';

export const wrappedFunctions = {};
['autorun', 'autorunAsync', 'reaction', 'when'].forEach((fnName) => {
  wrappedFunctions[fnName] =   (scope, ...args) => {
    const dispose = mobx[fnName](...args);
    if (scope) scope.$on('$destroy', dispose);
  }
});

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
export default ngMobxModule.directive('mobxAutorun', mobxAutorun).name;
