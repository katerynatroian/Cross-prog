import { AbstractControl, ValidationErrors } from '@angular/forms';

export function valvesValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  
  if (value === null || value === undefined || value === '') {
    return { required: true };
  }

  if (isNaN(value)) {
    return { notANumber: true };
  }

  if (value < 1 || value > 5) {
    return { invalidValvesNumber: true };
  }

  return null;
}
