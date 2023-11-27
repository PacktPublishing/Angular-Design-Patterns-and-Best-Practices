import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function multipleValidator(multiple: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isNotMultiple = control.value % multiple !== 0;
    return isNotMultiple ? { isNotMultiple: { value: control.value } } : null;
  };
}
