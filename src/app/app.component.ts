import {
  IController,
  IDirective,
} from 'angular';

import { IOption } from './option.interface';

class AppController implements IController {

  /**
   * Store for available form list
   */
  public availableForms: IOption[] = [{
    formName: 'form 1',
    required: false,
  }, {
    formName: 'form 2',
    required: true,
  }, {
    formName: 'form 3',
    required: false,
  }, {
    formName: 'form 4',
    required: false,
  }, {
    formName: 'form 5',
    required: true,
  }];

  /**
   * store selected models in the form
   */
  public selectedForms: IOption[] = [
    this.availableForms[0],
    this.availableForms[1],
    // ...this.availableForms,
  ];
}

const AppComponent = (): IDirective => ({
  restrict: 'E',
  template: require('./app.component.html'),
  controller: AppController,
  controllerAs: 'ctrl',
})

export {
  AppController,
  AppComponent
}
