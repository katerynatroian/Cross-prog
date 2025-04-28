import { FormControl } from '@angular/forms';
import { stringsValidator } from './stringsValidator';

describe('stringsValidator', () => {
  const validator = stringsValidator();

  it('should pass validation for valid values (3 to 8)', () => {
    [3, 4, 5, 6, 7, 8].forEach(value => {
      const control = new FormControl(value);
      expect(validator(control)).toBeNull();
    });
  });

  it('should fail validation for values less than 3', () => {
    const control = new FormControl(2);
    const result = validator(control);
    expect(result).toEqual({ stringsOutOfRange: { actual: 2 } });
  });

  it('should fail validation for values greater than 8', () => {
    const control = new FormControl(9);
    const result = validator(control);
    expect(result).toEqual({ stringsOutOfRange: { actual: 9 } });
  });

  it('should fail validation if value is not a number', () => {
    const control = new FormControl('hello');
    const result = validator(control);
    expect(result).toEqual({ notANumber: true });
  });

  it('should pass validation if value is empty', () => {
    const control = new FormControl('');
    expect(validator(control)).toBeNull();
  });

  it('should pass validation if value is null', () => {
    const control = new FormControl(null);
    expect(validator(control)).toBeNull();
  });

  it('should pass validation if value is undefined', () => {
    const control = new FormControl(undefined);
    expect(validator(control)).toBeNull();
  });
});
