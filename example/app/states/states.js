import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('NgMobx.controllers', [])
  .controller('HomeController', HomeController);
