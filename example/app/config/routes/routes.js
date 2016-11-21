import angular from 'angular';
import 'angular-ui-router';

import { homeRoutes } from 'config/routes/home';
import { staticRoutes } from 'config/routes/static';

const defaultRoute = /* @ngInject */ ($urlRouterProvider) => {
  $urlRouterProvider.otherwise('/404');
};

export default angular.module('NgMobx.routes', ['ui.router'])
  .config(defaultRoute)
  .config(homeRoutes)
  .config(staticRoutes);
