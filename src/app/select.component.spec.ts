import {
  SelectController,
  removeByIndex
} from './select.component';

describe('SelectController ', () => {
  let controller: SelectController;

  beforeEach(() => {
    controller = new SelectController();
  });

  it('should create', () => {
    expect(controller).toBeTruthy();
  });

  describe('add()', () => {
    it('should add model to the list', () => {
      const expected = [{ formName: null }];
      controller.ngModel = [];
      controller.add();
      expect(controller.ngModel).toEqual(expected);
    });

    it('should update available forms', () => {
      const spy = spyOn(controller, 'unused');
      controller.ngModel = [];
      controller.add();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('remove()', () => {
    it('should renove model from the list', () => {
      const expected = [];
      controller.ngModel = [{ formName: null }];
      controller.remove(0);
      expect(controller.ngModel).toEqual(expected);
    });

    it('should update available forms', () => {
      const spy = spyOn(controller, 'unused');
      controller.ngModel = [];
      controller.remove(0);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  it('should remove item by index', () => {
    const expected = [2, 3 ,4];
    expect(removeByIndex(0, [1, 2, 3, 4])).toEqual(expected);
  });

});
