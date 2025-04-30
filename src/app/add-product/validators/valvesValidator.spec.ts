import { valvesValidator } from './valvesValidator';
import { FormControl } from '@angular/forms';

describe('valvesValidator', () => {

  it('should return null for valid values between 1 and 5', () => {
    // Test valid values for valves
    const control1 = new FormControl(1);
    const control2 = new FormControl(3);
    const control3 = new FormControl(5);

    expect(valvesValidator(control1)).toBeNull();
    expect(valvesValidator(control2)).toBeNull();
    expect(valvesValidator(control3)).toBeNull();
  });

  it('should return "invalidValvesNumber" error if value is less than 1', () => {
    const control = new FormControl(0);
    const result = valvesValidator(control);
    expect(result).toEqual({ invalidValvesNumber: true });
  });

  it('should return "invalidValvesNumber" error if value is greater than 5', () => {
    const control = new FormControl(6);
    const result = valvesValidator(control);
    expect(result).toEqual({ invalidValvesNumber: true });
  });

  it('should return "notANumber" error if value is not a number', () => {
    const control = new FormControl('abc');
    const result = valvesValidator(control);
    expect(result).toEqual({ notANumber: true });
  });

  it('should return "required" error if value is null or empty', () => {
    const control1 = new FormControl(null);
    const control2 = new FormControl('');
    const result1 = valvesValidator(control1);
    const result2 = valvesValidator(control2);
    expect(result1).toEqual({ required: true });
    expect(result2).toEqual({ required: true });
  });

});
