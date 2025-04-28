import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function pieceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return null; 
    }
    if (isNaN(value)) {
      return { notANumber: true };
    }
    const numValue = Number(value);
    if (numValue < 2 || numValue > 5) {
      return { drumsOutOfRange: { actual: numValue } };
    }
    return null;
  };
}
