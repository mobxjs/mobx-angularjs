import { frameworks } from '../../stores/frameworks';

class myHeaderController {
  // @ngInject
  constructor() {
    this.frameworks = frameworks;
  }
}

export const myHeader = {
  templateUrl: '/components/my-header/my-header.html',
  controller: myHeaderController,
  controllerAs: '$ctrl'
};
