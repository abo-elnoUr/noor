import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class DateValidation {

  static validControls(fromControlName: string, toControlName: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const from = formGroup.get(fromControlName) as FormControl;
      const to = formGroup.get(toControlName) as FormControl;
      if (to.errors && !to.errors['toShouldMoreThanFrom']) {
        return null;
      }
      if (from.value > to.value) {
        to.setErrors({ toShouldMoreThanFrom: true });
        return { toShouldMoreThanFrom: true }
      } else {
        to.setErrors(null);
        return null;
      }
    }
  }

  static ValidDateTime(fromDateControl: string, fromTimeControl: string, toDateControl: string, toTimeControl: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const fromDate = formGroup.get(fromDateControl) as FormControl;
      const fromTime = formGroup.get(fromTimeControl) as FormControl;
      const toDate = formGroup.get(toDateControl) as FormControl;
      const toTime = formGroup.get(toTimeControl) as FormControl;
      if(toDate.errors && !toDate.errors['toShouldMoreThanFrom']) {
        return null;
      }
      if(toTime.errors && !toTime.errors['toShouldMoreThanFrom']) {
        return null;
      }
      if(fromDate.value > toDate.value) {
        toDate.setErrors({ toShouldMoreThanFrom: true});
        return { toShouldMoreThanFrom: true }
      }
      if(fromTime.value > toTime.value) {
        toTime.setErrors({ toShouldMoreThanFrom: true })
        toDate.setErrors(null);
        return { toShouldMoreThanFrom: true }
      }

      toDate.setErrors(null);
      toTime.setErrors(null);
      return null;


    }
  }

}
