import * as angular from 'angular';

import { AppComponent } from './app/app.component';
import { SelectComponent } from './app/select.component';

require('./styles.css');

const app = angular
  .module('app', [])
  .directive('appRoot', AppComponent)
  .directive('appSelect', SelectComponent)
  .name;

export {
  app
}
