import { observable, computed, action, spy } from 'mobx';

class Framework {
  @observable checked;
  @observable name;

  constructor(data) {
    Object.assign(this, data);
  }

}
class Frameworks {
  @observable items;
  @observable filter;

  constructor() {
    this.items = [
      new Framework({ name: 'Angular' }),
      new Framework({ name: 'React' }),
      new Framework({ name: 'Backbone' }),
      new Framework({ name: 'Vue' }),
      new Framework({ name: 'Ember' })
    ];
  }

  @action setAll(value) {
    this.filteredItems.forEach((item) => item.checked = value);
  }

  @action addNew(frameworkName) {
    this.items.push(new Framework({ name: frameworkName }));
  }

  @computed get filteredItems():Framework[] {
    console.log('calculate filteredItems');
    if (!this.filter) return this.items;

    const regexp = new RegExp(this.filter, 'i');
    return this.items.filter((item) => regexp.test(item.name));
  }

  @computed get selectedItems() {
    console.log('calculate selectedItems');
    return this.items.filter((item) => item.checked);
  }

  @computed get isAllChecked() {
    console.log('calculate isAllChecked');
    for (const item of this.filteredItems) {
      if (!item.checked) return false;
    }

    return true;
  }
  set isAllChecked(value:boolean) {
    this.setAll(value);
  }
}

export const frameworks = new Frameworks();
window.frameworks = frameworks;
