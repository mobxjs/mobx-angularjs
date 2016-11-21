import { frameworks } from '../../stores/frameworks';

class frameworksFilterController {
  // @ngInject
  constructor() {
    this.frameworks = frameworks;
  }

  toggleAll() {
    const newValue = !this.frameworks.isAllChecked;

    this.frameworks.setAll(newValue);
  }

  addNew() {
    this.frameworks.addNew(this.newItem);
    this.newItem = '';
  }
}

export const frameworksFilter = {
  templateUrl: '/components/frameworks/frameworks-filter.html',
  controller: frameworksFilterController,
  controllerAs: '$ctrl'
};
