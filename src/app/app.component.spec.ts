import { AppController } from './app.component';

describe('AppComponent', () => {
  let controller: AppController;

  beforeEach(() => {
    controller = new AppController();
  });

  it('should create', () => {
    expect(controller).toBeTruthy();
  });

  it('should provide available forms list', () => {
    expect(controller.availableForms).toBeTruthy();
    expect(controller.availableForms.length > 0).toBeTruthy();
  });

  it('should provide selected forms list', () => {
    expect(controller.selectedForms).toBeTruthy();
    expect(controller.selectedForms.length > 0).toBeTruthy();
  });

  it('should provide form with apprpriate model', () => {
    expect(controller.availableForms.length > 0).toBeTruthy();
    controller.availableForms.forEach(model => {
      expect(model.formName).not.toEqual(undefined);
      expect(model.required).not.toEqual(undefined);
    });
  });
});
