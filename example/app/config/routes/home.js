export /* @ngInject */ function homeRoutes($stateProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/states/home/home.html',
      controller: 'HomeController',
      controllerAs: '$ctrl',
    });
}
