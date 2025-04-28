import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function keysValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null;
    }
    if (isNaN(value)) {
      return { notANumber: true };
    }
    const numValue = Number(value);
    if (numValue < 88 || numValue > 108) {
      return { keysOutOfRange: { actual: numValue } };
    }
    return null;
  };
}
