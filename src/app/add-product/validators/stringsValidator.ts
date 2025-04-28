import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function stringsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null; 
    }
    if (isNaN(value)) {
      return { notANumber: true }; 
    }
    const numValue = Number(value);
    if (numValue < 3 || numValue > 8) {
      return { stringsOutOfRange: { actual: numValue } };
    }
    return null;
  };
}
