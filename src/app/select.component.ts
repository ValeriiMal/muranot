import {
  IDirective,
  IComponentController,
  IOnInit,
} from 'angular';

import { IOption } from './option.interface';

const optionComparator = (a: IOption, b: IOption): number => a.formName > b.formName ? 1 : 0;

export const removeByIndex = (i: number, list: any[]) => [
  ...list.slice(0, i),
  ...list.slice(i + 1, list.length),
];

export class SelectController implements IComponentController, IOnInit {

  /**
   * Input parameter for specifying available form list
   */
  public forms: IOption[] = [];

  /**
   * Input parameter for specifying selected form list
   */
  public ngModel: IOption[];

  //local
  /**
   * Store currently available forms list without already selected ones
   */
  private availableForms: IOption[] = [];

  $onInit() {
    this.ngModel = this.stackRequired(this.ngModel);
    this.availableForms = this.unused(this.ngModel);
  }

  private stackRequired = (list: IOption[]): IOption[] =>
    list.reduce((acum, item) => {
      if (item.required) {
        acum.unshift(item);
      } else {
        acum.push(item);
      }
      return acum;
    }, [])

  public onSelectChange(): void {
    this.ngModel = this.stackRequired(this.ngModel);
  }

  public getAvailableFor(i: number): IOption[] {
    return [this.ngModel[i]]
      .concat(this.availableForms)
      .sort(optionComparator);
  }

  /**
   * Add new item to form list to the end of list
   * Update available forms list
   */
  public add(): void {
    this.ngModel = [
      ...this.ngModel,
      { formName: null },
    ];
    this.availableForms = this.unused(this.ngModel);
  }

  /**
   * Remove specified item by index
   * Update available forms list
   */
  public remove(i: number): void {
    this.ngModel = removeByIndex(i, this.ngModel);
    this.availableForms = this.unused(this.ngModel);
  }

  /**
   * Generate currently available options from specified ones and stored state forms
   * @param  options [description]
   * @return         [description]
   */
  public unused(options: IOption[]): IOption[] {
    const selected = (check: IOption): boolean => options.some(opt => opt.formName === check.formName);
    return this.forms.filter(form => !selected(form));
  }

  /**
   * Check if form can be removed by specified index
   */
  public removeable = (i: number): boolean => (i === this.ngModel.length - 1) && !this.ngModel[i].required;

  /**
   * Check if additional form can be added to the list
   */
  public addable = (): boolean => this.ngModel.length < this.forms.length;
}

const SelectComponent = (): IDirective => ({
  restrict: 'E',
  template: require('./select.component.html'),
  controller: SelectController,
  controllerAs: 'self',
  scope: {},
  bindToController: {
    // better to use event like output functions with '&' or
    // like a regular input with function passed in
    // for unidirectional data flow because two-way databinding
    // is badly minatainable and hard to reason about
    // used here for consistency with task's API
    ngModel: '=',
    forms: '<',
  }
})

export {
  SelectComponent
}
