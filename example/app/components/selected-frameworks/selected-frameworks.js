import { frameworks } from '../../stores/frameworks';

class selectedFrameworksController {
  // @ngInject
  constructor() {
    this.frameworks = frameworks;
  }
}

export const selectedFrameworks = {
  templateUrl: '/components/selected-frameworks/selected-frameworks.html',
  controller: selectedFrameworksController,
  controllerAs: '$ctrl'
}
