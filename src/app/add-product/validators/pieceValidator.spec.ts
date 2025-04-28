import { FormControl } from '@angular/forms';
import { pieceValidator } from './pieceValidator';

describe('pieceValidator', () => {
  const validator = pieceValidator();

  it('should pass validation for valid values (2 to 5)', () => {
    [2, 3, 4, 5].forEach(value => {
      const control = new FormControl(value);
      expect(validator(control)).toBeNull();
    });
  });

  it('should fail validation for values less than 2', () => {
    const control = new FormControl(1);
    const result = validator(control);
    expect(result).toEqual({ drumsOutOfRange: { actual: 1 } });
  });

  it('should fail validation for values greater than 5', () => {
    const control = new FormControl(6);
    const result = validator(control);
    expect(result).toEqual({ drumsOutOfRange: { actual: 6 } });
  });

  it('should fail validation if value is not a number', () => {
    const control = new FormControl('drums');
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
