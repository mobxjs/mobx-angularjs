import { frameworksFilter } from './frameworks/frameworks-filter';
import { selectedFrameworks } from './selected-frameworks/selected-frameworks';
import { myHeader } from './my-header/my-header';
import angular from 'angular';

export default angular.module('NgMobx.components', [])
  .component('myHeader', myHeader)
  .component('selectedFrameworks', selectedFrameworks)
  .component('frameworksFilter', frameworksFilter);
