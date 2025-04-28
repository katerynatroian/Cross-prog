import { FormControl } from '@angular/forms';
import { keysValidator } from './keysValidator';

describe('keysValidator', () => {
  const validator = keysValidator();

  it('should pass validation for valid values (88 to 108)', () => {
    [88, 90, 100, 108].forEach(value => {
      const control = new FormControl(value);
      expect(validator(control)).toBeNull();
    });
  });

  it('should fail validation for values less than 88', () => {
    const control = new FormControl(87);
    const result = validator(control);
    expect(result).toEqual({ keysOutOfRange: { actual: 87 } });
  });

  it('should fail validation for values greater than 108', () => {
    const control = new FormControl(109);
    const result = validator(control);
    expect(result).toEqual({ keysOutOfRange: { actual: 109 } });
  });

  it('should fail validation if value is not a number', () => {
    const control = new FormControl('piano');
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
