const angular = require('angular');
const mobx = require('mobx');

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
